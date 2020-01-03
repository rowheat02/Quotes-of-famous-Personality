import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import Icon from 'react-native-vector-icons/FontAwesome';





export default class Titlecard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    callpress = () => {
        this.props.spinner(true)
        
        if(this.props.name==="Author"){setTimeout(() => {
            this.props.NavigateAuthor()
            this.props.spinner(false)
        }
            , 0.5)
        }
        if(this.props.name==="Random"){
            this.props.spinner(true)
            setTimeout(()=> {
              this.props.navFunc(this.props.name)
             this.props.spinner(false)}
             ,0.5)
        }



    }


    render() {
        return (
            <TouchableOpacity style={{ justifyContent: 'flex-start', width: "48%", marginTop: 5, }} onPress={this.callpress}>
                    <Text style={{color:'white',fontSize:12.6,marginLeft:0,alignSelf:'center',fontFamily:'JuliusSansOne-Regular'}}>{this.props.sub}</Text>

                <Card style={{
                    backgroundColor:'rgba(10, 32, 66,0.6)', justifyContent: 'center', alignItems: 'center', paddingTop: 10, borderRadius: 15, borderColor: "white", borderWidth: 0.5,
                   
                }}  >
                    {this.props.icon}
                    <Text style={{ fontSize: 15, textShadowColor: 'red', color: 'white', paddingBottom: 3, fontFamily: 'JuliusSansOne-Regular' }}>{this.props.title}</Text>

                </Card>
            </TouchableOpacity>




        )
    }
}
