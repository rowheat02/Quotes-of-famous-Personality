import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight,ScrollView ,Linking} from 'react-native';
import IconF from 'react-native-vector-icons/FontAwesome'


export default class Aboutus extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleClick = (sentUrl) => {
        Linking.canOpenURL(sentUrl).then(supported => {
            if (supported) {
                Linking.openURL(sentUrl);
            } else {
            }
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'rgba(63, 81, 181,0.9)', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center', marginTop: 10, backgroundColor: 'rgba(63, 81, 181,0.6)', padding: 10, width: '95%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
                        <Text style={{ color: 'white' }}>Developed By:  </Text>
                        <Text style={{ color: 'white' }}>Rohit Gautam</Text>
                    </View>
                    <Text style={{ color: 'white', alignSelf: 'center' }}>Conect With Developer</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, alignItems: 'center', paddingTop: 15 }}>
                        <TouchableHighlight onPress={() => this.handleClick("https://facebook.com/RowHeatGautam")} style={{ width: '45%', height: 90, padding: 5, borderRadius: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ alignItems: 'center' }}>
                                <IconF name="facebook-square" size={40} style={{ color: '#3b5998', marginTop: 5 }}></IconF>
                                <Text style={{ color: '#3b5998', fontSize: 25 }}>Facebook</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => this.handleClick("https://instagram.com/row_heat02")} style={{ width: '45%', height: 90, padding: 5, borderRadius: 10, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center' }} >
                                <IconF name="instagram" size={40} style={{ color: '#e4405f', marginTop: 5 }}></IconF>
                                <Text style={{ color: '#e4405f', fontSize: 25 }}>Instagram</Text>
                            </View>

                        </TouchableHighlight>


                    </View>

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flex: 0.8 }}>
                    <Text style={{ color: 'white' }}>Icons Used: </Text>
                    <Text style={{color:'white',fontSize:24}}>React Native Vector Icons</Text>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column',flex:0.5 }}>
                    <Text style={{ color: 'white' }}>Fonts Used: </Text>
                    <Text style={{color:'white',fontSize:24}}>Google Fonts</Text>
                </View>
                <ScrollView style={{flex: 0.5,marginTop:10}}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>

                    





                </View>

                </ScrollView>
                


            </View>
        );
    }
}
