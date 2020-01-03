import React, { Component } from 'react';
import { View, Text } from 'react-native';
import FadeAnimView from '../Animations/FadeAnimation'
import SlideLeft from  '../Animations/Lefttoright'
import Lefttoright from '../Animations/Lefttoright';
import Bottomtotop from '../Animations/BottomtoRight'

export default class Specialthanks extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'#3b5998'}}>
          <FadeAnimView style={{backgroundColor:'red'}}>
              {/* <Text style={{marginLeft:150,color:'white'}}>K xa Yr Sathi</Text> */}
          </FadeAnimView>
          <Bottomtotop style={{flexDirection:'row',position:'absolute'}}>
              <Text style={{color:'white'}}> Sliding to Right</Text>
          </Bottomtotop>

      </View>
    );
  }
}
