import React, { Component } from 'react';
import { View, Text,FlatList } from 'react-native';
import QuotesCard from '../QuotesCard'
import { Container, Header, Title, Content, Footer, FooterTab, Left, Right, Body, Icon,Button } from 'native-base';
import IconI from 'react-native-vector-icons/Ionicons';
import IconF5 from 'react-native-vector-icons/Entypo';
import { BannerView } from 'react-native-fbads';



export default class AutorQuotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasAd:true
       };
this.Quotes=this.props.navigation.getParam('quotes')

  }


  render() {
Q=this.props.navigation.getParam('quotes')

    
    return (
      <Container>
      <Header style={{ backgroundColor: '#136AFC' }}>
          <Left>
              <Button transparent onPress={() => this.props.navigation.navigate('AuthorList')}>
                  <IconI style={{ color: "#E8EEF8" }} name='ios-arrow-back' size={30} />
              </Button>
          </Left>
          <Body>
              <Title style={{ color: "#E8EEF8", fontSize:17 , }}>{Q[0].quoteAuthor}  </Title>
          </Body>
          <Right>
              <IconF5 style={{ color: "#E8EEF8" }} name='quote' size={30} />

          </Right>
      </Header>
      <Content style={{ flex: 1, backgroundColor: "#4D8EFB" }}>
      <View style={{backgroundColor:'#4D8EFB',flex:1}}>
        <FlatList
        data={this.Quotes}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => { return (<QuotesCard key={index} quote={item.quoteText}></QuotesCard>) }}


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
