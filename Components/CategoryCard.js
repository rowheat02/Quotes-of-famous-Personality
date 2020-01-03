import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';


export default class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.avchar=this.props.name.charAt(0)
  }
  spinnerandNavigate=()=>{

    this.props.spinner(true)
    setTimeout(()=> {
      this.props.navFunc(this.props.name)
     this.props.spinner(false)}
     ,0.5)

 

  }

  render() {
    return (
      <TouchableOpacity onPress={()=>this.spinnerandNavigate()}>
        <View style={{ backgroundColor: 'rgba(63, 81, 181,0.6)', borderRadius: 10,borderBottomRightRadius:80, borderColor: 'white', borderWidth: 0, flexDirection: 'row', alignItems: 'center', marginBottom: 8,marginTop:4, }}>
          <Avatar rounded title={this.avchar} size={65} titleStyle={{ color: '#283593',fontFamily:"IndieFlower" }} overlayContainerStyle={{ backgroundColor: 'white' }} />
          <View style={{backgroundColor:'#283593',flex:0.8,borderRadius:10,marginLeft:50,borderTopLeftRadius:80,borderBottomRightRadius:80,height:'100%',}}>
          <Text style={{alignSelf:'center',marginTop:18,fontSize: 20,fontFamily:"JuliusSansOne-Regular",color:"white"}}>{this.props.name}</Text>
          </View>

        </View>
      </TouchableOpacity>

    );
  }
}
