import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import IconA from 'react-native-vector-icons/AntDesign';



export default class AuthorCard extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {


    return (
      <TouchableOpacity onPress={()=>this.props.selecteauthor(this.props.Name)} style={{ borderRadius: 10, borderWidth: 1, borderColor: 'white', backgroundColor: '#136AFC', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
        <IconA style={{ color: "#E8EEF8", marginRight: 'auto' }} size={30} name='leftcircleo' />

        <Text style={{ fontSize: 20, fontFamily: "Merriweather-Italic", color: 'white' }}>{this.props.Name} </Text>
        <IconA style={{ color: "#E8EEF8", marginLeft: 'auto', }} size={30} name='rightcircleo' />


      </TouchableOpacity>
    )
  }
}
