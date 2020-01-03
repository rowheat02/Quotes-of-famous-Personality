import React, { Component } from 'react'
import { Text, View, FlatList,AsyncStorage,TouchableOpacity,Animated,Alert,Clipboard,Share,ToastAndroid } from 'react-native'
import IconMat from 'react-native-vector-icons/MaterialCommunityIcons';


export default class FavouriteCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            animationValue:new Animated.Value(4)

        };
    };
    del=()=>{
        Alert.alert(
            '',
            '  Delete from Favourite List',
            [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel',
              },
              {text: 'yes', onPress: () =>   AsyncStorage.getItem("Favourite").then((data)=>{
                var dat=JSON.parse(data)
                var newdata=dat.filter((e)=>!(e===this.props.quote))
                AsyncStorage.setItem("Favourite",JSON.stringify(newdata))
                this.props.changeStateinCard(newdata)})},
            ],
            {cancelable: true},
          );   
    }
    
    copyQuote = async () => {
        
        await Clipboard.setString(this.props.quote);
        // alert('Copied to Clipboard!');
        ToastAndroid.show("Copied to Clipboard",1000)
    
    }
    shareQuote(msg) {
        
        Share.share({
          message: msg
      })
    }

    componentDidMount(){

    }

    render() {

        return (
            <View>

                
                <Animated.View style={{ backgroundColor: "white", marginBottom: 10, borderRadius: 8, borderColor: 'white', borderWidth: 1, width: "98%", alignItems: 'center', paddingBottom: 3, marginLeft: this.state.animationValue }}>
                    <Text style={{ color: '#136AFC', textAlign: 'justify', padding: 10, fontSize: 20, }}>{this.props.quote}</Text>
                    
                    <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white' }} >
                        <TouchableOpacity style={{ width: "42%", borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#136AFC' }} onPress={()=>this.shareQuote(this.props.quote)}>
                        <View ><Text style={{ color: 'white' }}>Share</Text></View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.del}>
                            <IconMat name="delete" size={30} style={{margin:5}} color={"red"} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: "42%", borderRadius: 10, borderWidth: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#136AFC' }} onPress={this.copyQuote}>
                        <View ><Text style={{ color: 'white', alignSelf: 'center' }}>Copy</Text></View>


                        </TouchableOpacity>
                    </View>


                </Animated.View>

            </View>
        )
    }
}
