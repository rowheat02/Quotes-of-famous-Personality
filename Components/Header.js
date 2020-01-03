import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Button } from 'react-native';
import TitleCard from './Titlecard';
import IconM from 'react-native-vector-icons/MaterialIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import filesname from '../Sources/files';
import CategoryCard from './CategoryCard';
import { Searchbar,ProgressBar, Colors } from 'react-native-paper';
import { BannerView } from 'react-native-fbads';






class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      back:'',
      hasAd:true
    };
  }



  render() {
    // icons
    const author = <IconM name="people" size={60} color="white" />
    const random = <IconF name="random" size={55} color="white" />


    return (
      <View>
       
        <View style={{ flexDirection: "row", justifyContent: 'space-around' }}>
          <TitleCard icon={author} title="Famous Authors" name="Author" NavigateAuthor={this.props.NavigateAuthor} spinner={this.props.spinner} sub="People, Proverbs"  />
          <TitleCard icon={random} title="Random Quotes" spinner={this.props.spinner} name="Random" navFunc={this.props.NavigateCategory} sub="Simple, Sweet" />
        </View>
        <View>
    
      

        </View>
        <View style={{ flexDirection: 'row',justifyContent:'flex-start',alignItems:'center' }}>
          <Text style={{ color: 'white', marginLeft: 5, fontSize: 18,marginTop:15,fontFamily:"IndieFlower" }}>Categories</Text>
        </View>
        {filesname.map((element) => <CategoryCard  spinner={this.props.spinner} name={element} key={element} navFunc={this.props.NavigateCategory}></CategoryCard>)}


      </View>

    );
  }
}

export default Header;
