import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import Data from '../../Data/FilteredQuotes'
import { Searchbar, ProgressBar, Colors } from 'react-native-paper';
import AuthorCard from '../Authors/AuthorCard'
import IconF5 from 'react-native-vector-icons/Entypo';
import { ActivityIndicator, FlatList, TouchableOpacity } from 'react-native'
import SearchableDropdown from 'react-native-searchable-dropdown';
import AuthorList from '../../Sources/AuthorName'
import Authorwaala from '../../Data/FilteredQuotes'
import QuotesCard from '../QuotesCard'
import { ScrollView } from 'react-native-gesture-handler';
import IconI from 'react-native-vector-icons/Ionicons';
import { BannerView } from 'react-native-fbads';





export default class SelectAuthor extends Component {
    constructor(props) {
        super(props)
        this.Quotess = Data
        this.authorlist = this.Quotess.map((e) => {
            return e.quoteAuthor;
        });
        this.repeatedAuthors = this.authorlist.filter((e) => e !== "");
        this.filtered = (this.repeatedAuthors.filter((name, index) => this.repeatedAuthors.indexOf(name) == index));
        this.filteredStart = this.filtered.slice(0, 15)





        this.state = {
            index: 50,
            AuthorData: this.filteredStart,
            count: 1,
            spinner: false,
            selectedAuthor: AuthorList[0].name,
            bool: false,
            queryList: '',
            tobesent: '',
            hasAd:true


        };
    };





    selecteauthor = (author) => {

        this.setState({ selectedAuthor: author })
        this.send()
    }
    navigativetoAuthorList=(author)=>{
        const filtered = Authorwaala.filter((element) => element.quoteAuthor ===author )
        this.props.navigation.navigate('AuthorQuotes', {
            quotes: filtered,
        });
    



    }
    back = () => {
            this.props.navigation.navigate('Home')
        

    }

    send = () => {
        const filtered = Authorwaala.filter((element) => element.quoteAuthor === this.state.selectedAuthor)
        this.props.navigation.navigate('AuthorQuotes', {
            quotes: filtered,
        });

    }


    render() {

        return (
            <Container>
                <Header>
                <Left>
                        <Button transparent onPress={this.back}  >
                            <IconI style={{ color: "#E8EEF8" }} name='ios-arrow-back' size={35} />
                        </Button>

                    </Left>

                    <Body>
                        <Title style={{ alignSelf: "center" }}>Famous Authors</Title>
                    </Body>
                    <Right>
                        <IconF5 style={{ color: "#E8EEF8" }} name='quote' size={30} />
                    </Right>
                </Header>




                <Content style={{ backgroundColor: '#0E2D5F', marginTop: 'auto', marginBottom: 'auto' }}>

                    <View style={{ marginBottom: 15, backgroundColor: "#0E2D5F", }}>
                        <SearchableDropdown

                            onItemSelect={item => this.selecteauthor(item.name)}
                            containerStyle={{ padding: 5 }}
                            textInputStyle={{
                                padding: 12,
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 5,
                                color: 'white'
                            }}
                            itemStyle={{
                                padding: 10,
                                marginTop: 2,
                                backgroundColor: '#ddd',
                                borderColor: '#bbb',
                                borderWidth: 1,
                                borderRadius: 5,
                            }}
                            itemTextStyle={{ color: 'white' }}
                            itemTextStyle={{ color: 'red' }}
                            itemsContainerStyle={{ maxHeight: 302 }}
                            items={AuthorList}
                            placeholder="Search Author"
                            resetValue={this.state.bool}
                            underlineColorAndroid="transparent"
                            placeholderTextColor='white'


                        />


                    </View>
                    <View style={{ marginTop: 10 }}>
                        <FlatList
                            data={AuthorList}
                            renderItem={({ item }) => (

                                <View  style={{ flex: 1, flexDirection: 'column', backgroundColor: '#283593', borderRadius: 12, margin: 3, alignItems: 'center', justifyContent: 'center', height: 100, width: '45%', borderColor:'white', borderWidth: 1,padding:5 }}>
                                    <TouchableOpacity onPress={() => this.navigativetoAuthorList(item.name)} style={{height:'100%',width:'100%',justifyContent: 'center',alignItems:'center',}}>
                                        <Text style={{ color: 'white',alignSelf:'center',fontFamily:'JuliusSansOne-Regular',fontSize:14 }}>{item.name}</Text>
                                    </TouchableOpacity>
                                </View>

                            )}
                            //Setting the number of column
                            numColumns={2}
                            keyExtractor={(item, index) => index}

                        />

                    </View>









                </Content>
                {this.state.hasAd&&<BannerView
                    placementId="2349586242028466_2349592102027880"
                    type="standard"
                    onError={()=>this.setState({hasAd:false})}
                    
                />}
            </Container>

        );

    }
}