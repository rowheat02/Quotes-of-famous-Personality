import React, { Component } from 'react'
import { Text, View, FlatList, AsyncStorage } from 'react-native'
import Choosen from './Filechose'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Button } from 'native-base';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF5 from 'react-native-vector-icons/Entypo';
import QuotesCard from './QuotesCard';
import BottomtoTop from './Animations/BottomtoRight';
import LR from './Animations/Lefttoright';
import { BannerView, InterstitialAdManager } from 'react-native-fbads';
import { tsThisType } from '@babel/types';









export default class QuotesList extends Component {



    constructor(props) {
        super(props)
        this.Name = this.props.navigation.getParam('Name');
        this.choosed = Choosen(this.Name);
        this.c = this.choosed.default.slice(0, this.choosed.length);
        this.vari = 10;



        this.state = {
            selctedList: ["Loading"],
            refreshing: false,
            hasAd: true,
            adfrequency: 0
        };

    };
    endReached = () => {
        this.vari += 10
        this.c = this.choosed.default.slice(0, this.vari)
        this.setState((pre) => ({ selctedList: this.c }))
    }
    handlerefresh = () => {
        this.setState({ refreshing: true })
    }
    shuffle=(array)=> {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }
    back = () => {
        
        AsyncStorage.getItem("AdFrequency").then( (data) => {

            var tempdata = data
            if (tempdata==="true") {
                InterstitialAdManager.showAd("2349586242028466_2349619505358473") 
            }
            this.props.navigation.navigate('Home')
            AsyncStorage.setItem("AdFrequency", tempdata=="true"?"false":"true")
        })


       
      


    }
 

    componentDidMount(){
        const Randomize=this.shuffle(this.c)
        this.setState({selctedList:Randomize})
    }



    render() {
        



        return (

            <Container>
                <Header style={{ backgroundColor: '#136AFC' }}>
                    <Left>
                        <Button transparent onPress={this.back}>
                            <IconI style={{ color: "#E8EEF8" }} name='ios-arrow-back' size={30} />
                        </Button>
                    </Left>
                    <Body>
                        <LR initial={30} final={-20} action={true}>
                            <Title style={{ color: "#E8EEF8" }}>{this.Name}</Title>

                        </LR>
                    </Body>
                    <Right>
                        <IconF5 style={{ color: "#E8EEF8" }} name='quote' size={30} />

                    </Right>
                </Header>
                {/* <BottomtoTop> */}
                {/* <Content style={{ flex: 1, backgroundColor: "#4D8EFB" }}> */}



                <View style={{ flex: 1, backgroundColor: "#4D8EFB" }}>
                    {this.Name === "Random" ? <FlatList
                        data={this.state.selctedList}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => { return (<QuotesCard key={index} quote={item.text}></QuotesCard>) }}
                    /> : <FlatList
                            data={this.state.selctedList}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item, index }) => { return (<QuotesCard key={index} quote={item}></QuotesCard>) }}
                        />}

                </View>
                {this.state.hasAd && <BannerView
                    placementId="2349586242028466_2349592102027880"
                    type="standard"
                    onError={() => this.setState({ hasAd: false })}

                />}



                {/* <Button primary style={{flex:1,width:"95%",alignItems:'center',alignSelf:'center',justifyContent:'center'}} onPress={this.endReached}><Text style={{alignSelf:'center',color:'white'}}> More </Text></Button> */}

                {/* </Content> */}
                {/* </BottomtoTop> */}

            </Container>



        )
    }
}
