import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity,ToastAndroid } from 'react-native'
import IconM from 'react-native-vector-icons/MaterialIcons';
import { AsyncStorage, Clipboard,Share } from 'react-native';
import { Item, } from 'native-base';



export default class QuotesCard extends Component {
    constructor(props) {
        super(props)
        






        this.state = {
            favColor: 'blue',
            selected: false,
            count: 1,
            quote:this.props.quote
        }
    }

  

    copyQuote = async () => {
        
        await Clipboard.setString(this.props.quote);
        // alert('Copied to Clipboard!');
        ToastAndroid.show("Copied to Clipboard",1000)
    
    }
    shareQuote(msg) {
        
        Share.share({
          message: this.props.quote
      })
    }


    setcolor = () => {


        this.state.favColor === "blue" && AsyncStorage.getItem('Favourite').then(data => {
            var data = JSON.parse(data)
            var newdata = data.concat(this.props.quote)
            AsyncStorage.setItem("Favourite", JSON.stringify(newdata))
        })
        this.state.favColor === "red" && AsyncStorage.getItem('Favourite').then(data => {
            var dat = JSON.parse(data)
            var newdata = dat.filter((e) => !(e === this.props.quote))
            AsyncStorage.setItem("Favourite", JSON.stringify(newdata))

        })

        this.state.favColor === "red" && this.setState({ favColor: "blue" })
        this.state.favColor === "blue" && this.setState({ favColor: "red" })

    }

    colorselection = () => {


        AsyncStorage.getItem("Favourite").then((data) => {
            var dat = JSON.parse(data)
            var dataa = dat;
            if (dataa.includes(this.props.quote)) {
                this.setState({ favColor: "red" })
            }
            else { this.setState({ favColor: "blue" }) }
        })
        this.setState({ count: 2 })


    }

    render() {
        this.state.count === 1 && this.colorselection();
        return (
            <View style={{ backgroundColor: 'rgba(256,256,256,0.96)', marginBottom: 8,marginTop:6, borderRadius: 8, borderColor: 'white', borderWidth: 1, width: "98%", alignItems: 'center', paddingBottom: 3, marginLeft: 'auto', marginRight: 'auto' }}>
                <Text style={{ color: '#136AFC', textAlign: 'justify', padding: 10, fontSize: 20, }}>{this.props.quote}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }} >
                    <TouchableOpacity onPress={()=>this.shareQuote(this.state.quote)} style={{ width: "45%", borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#136AFC' }} >
                        <View ><Text style={{ color: 'white' }}>Share</Text></View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.setcolor}>
                        <IconM name="favorite" size={30} color={this.state.favColor} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.copyQuote} style={{ width: "45%", borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#136AFC' }}>
                        <View ><Text style={{ color: 'white', alignSelf: 'center' }}>Copy</Text></View>
                    </TouchableOpacity>
                </View>


            </View>
        )
    }
}
