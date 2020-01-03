import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import H from './Components/Header'
import IconM from 'react-native-vector-icons/MaterialIcons';
import { ActivityIndicator, AsyncStorage } from 'react-native'
import { throwStatement } from '@babel/types';
import { BannerView } from 'react-native-fbads';






export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      spinner: false,
      ascount: 1,
      hasAd:true

    }
  }


  NavigateCategory = (e) => {
    this.props.navigation.navigate('QuotesList', {
      Name: e,
    });
  }

  spinner = (e) => {
    this.setState({ spinner: e })


  }

  NavigateAuthor = () => {
    this.props.navigation.navigate('AuthorList');
  }
  NavigateFavourite = () => {
    this.props.navigation.navigate('Favourite');

  }

  componentDidMount() {
    AsyncStorage.getItem("Favourite").then(data => {
      const Dat = data
      if (!Dat) {
        AsyncStorage.setItem("Favourite", JSON.stringify([]))

      }

    })

    AsyncStorage.getItem("AdFrequency").then(data => {
      const Dat = data
      if (!Dat) {
        AsyncStorage.setItem("AdFrequency",JSON.stringify(false))
      }

    })


  



  }

  drawer = () => {
    this.props.navigation.toggleDrawer()
  }


  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#3f51b5' }}>
          <Left>
            <Button transparent onPress={this.drawer}>
              <Icon style={{ color: "#E8EEF8" }} name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#E8EEF8", fontFamily: 'JuliusSansOne-Regular',fontSize:15 }}>Quotes For You</Title>
          </Body>
          <Right>
            {this.state.spinner && <ActivityIndicator size="large" color="#46FC11" animating={this.state.spinner} style={{ marginRight: 10, marginBottom: 5 }} />}
            <Button transparent onPress={this.NavigateFavourite} style={{ borderRadius: 30, borderWidth: 1, borderColor: 'white', backgroundColor: 'rgba(82, 15, 169, 0.2)' }}>
              <IconM name="favorite" size={30} color="red" borderRadius={15} iconStyle={marginRight = 0} style={{ marginLeft: 2 }} />
            </Button>
          </Right>
        </Header>
        <Content style={{ flex: 1, backgroundColor: 'rgba(63, 81, 181,0.9)' }}>
          <H NavigateCategory={this.NavigateCategory} NavigateAuthor={this.NavigateAuthor} spinner={this.spinner} />

        </Content>
        <View>
        {this.state.hasAd&&<BannerView
                    placementId="2349586242028466_2349592102027880"
                    type="standard"
                    onError={()=>this.setState({hasAd:false})}
                    
                />}
        </View>
   



      </Container>
    );
  }
}