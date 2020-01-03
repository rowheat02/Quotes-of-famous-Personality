import React, { Component } from 'react'
import { Text, View, FlatList, AsyncStorage, TouchableOpacity } from 'react-native'
import FavCard from '../Favourites/FavouriteCard'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon, Button } from 'native-base';
import IconI from 'react-native-vector-icons/Ionicons';
import LR from '../Animations/Lefttoright';
import {InterstitialAdManager} from 'react-native-fbads';
import { BannerView } from 'react-native-fbads';





export default class Favourites extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favList: '',
            count: 1,
            hasAd:true
        }
    }

    getStorage = () => {
        AsyncStorage.getItem("Favourite").then((data) => {
            var dat = JSON.parse(data)
            this.setState({ favList: dat })

        })
        this.setState({ count: 2 })

    }

    changeStateinCard = (data) => {
        this.setState({ favList: data })
    }
    backListner = () => {
        AsyncStorage.getItem("AdFrequency").then( (data) => {

            var tempdata = data
            if (tempdata==="true") {
                InterstitialAdManager.showAd("2349586242028466_2349619505358473") 
            }
            this.props.navigation.navigate('Home')
            AsyncStorage.setItem("AdFrequency", tempdata=="true"?"false":"true")})
        

    }
    


    render() {
        this.state.count === 1 && this.getStorage();


        return (
            <Container>
                <Header style={{ backgroundColor: '#136AFC' }}>
                    <Left>
                        <Button transparent onPress={this.backListner} >
                            <IconI style={{ color: "#E8EEF8" }} name='ios-arrow-back' size={30} />
                        </Button>

                    </Left>
                    <Body>
                    <LR initial={0} final={10} action={true}>
                        <Title style={{ color: "#E8EEF8" }}>Favourite Quotes</Title>

                    </LR>

                    </Body>

              

                </Header>

                <Content style={{ flex: 1, backgroundColor: "#4D8EFB" }}>
                    <FlatList
                        data={this.state.favList}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item, index }) => { return (<FavCard changeStateinCard={this.changeStateinCard} key={index} quote={item}></FavCard>) }}

                    />

                </Content>
                {this.state.hasAd&&<BannerView
                    placementId="2349586242028466_2349592102027880"
                    type="standard"
                    onError={()=>this.setState({hasAd:false})}
                    
                />}

            </Container>
        )
    }
}
