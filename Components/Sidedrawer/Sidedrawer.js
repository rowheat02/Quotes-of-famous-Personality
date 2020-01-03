import React, { Component } from 'react';
import { View, Text, ScrollView, Image, Dimensions, ImageBackground, StyleSheet, Button, TouchableWithoutFeedback, Linking,Share } from 'react-native';
import Logo from '../../Sources/assets/Logo.png'
import { NavigationActions } from 'react-navigation';
import IconE from 'react-native-vector-icons/Entypo'
import IconF from 'react-native-vector-icons/FontAwesome'



export default class Sidedrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    handleClick = (sentUrl) => {
        Linking.canOpenURL(sentUrl).then(supported => {
            if (supported) {
                Linking.openURL(sentUrl);
            } else {
            }
        });
    }
    sharemesage=()=>{
        Share.share({
            message: "https://play.google.com/store/apps/details?id=com.quotescollection2019"
        })
    }

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: "rgba(75, 93, 189,0.3)", borderRadius: 5, height: 200 }}>
                    <Image style={{ width: 100, height: 100, alignSelf: 'center', marginTop: 35 }} source={Logo}></Image>
                    <Text style={{ alignSelf: 'center', fontFamily: "MetalMania-Regular", fontSize: 30, marginTop: -10, color: '#3b5998' }}>Quotes For You</Text>
                </View>


                <View style={styles.screenContainer}>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'Home') ? styles.activeBackgroundColor : null]} >
                        {<IconE name="home" size={30} style={{ marginLeft: 10, color: 'rgba(60, 23, 134,01)' }} />}
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Home') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Home')} >Home</Text>
                    </View>
                    <View style={[styles.screenStyle, (this.props.activeItemKey == 'AuthorLists') ? styles.activeBackgroundColor : null]}>
                        {<IconE name="users" size={30} style={{ marginLeft: 10, color: 'rgba(60, 23, 134,01)' }} />}
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'AuthorLists') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('AuthorLists')}>Authors Quotes</Text>
                    </View>

                    {/* <View style={[styles.screenStyle, (this.props.activeItemKey == 'Random Quotes') ? styles.activeBackgroundColor : null]}>
                        {<IconE name="heart" size={30} style={{ marginLeft: 8, color: 'rgba(60, 23, 134,01)' }} />}
                        <Text style={[styles.screenTextStyle, (this.props.activeItemKey == 'Random Quotes') ? styles.selectedTextStyle : null]} onPress={this.navigateToScreen('Random Quotes')}>Favourites </Text>
                    </View> */}
                </View>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 5, marginBottom: 5 }}>Our Social</Text>
                    <TouchableWithoutFeedback onPress={() => this.handleClick("https://www.facebook.com/Quotes-For-You-484567999040300/?modal=admin_todo_tour")}  >
                        <View style={styles.socialItem}>
                            <IconF name="facebook-square" size={30} style={{ color: '#3b5998', marginTop: 5 }}></IconF>
                            <Text style={styles.screenTextStyle}>Like Us</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => this.handleClick("https://www.instagram.com/insta_quotesforyou/")}>
                        <View style={styles.socialItem} >
                            <IconF name="instagram" size={30} style={{ color: '#e4405f', marginTop: 5 }}></IconF>
                            <Text style={styles.screenTextStyle}>Follow Us</Text>
                        </View>

                    </TouchableWithoutFeedback>
                </View>


                <View style={{ marginTop: 10 }}>
                    <Text style={{ marginLeft: 5, marginBottom: 5 }}>More</Text>
                    <TouchableWithoutFeedback onPress={()=>this.handleClick("https://play.google.com/store/apps/details?id=com.quotescollection2019")}>
                        <View style={styles.socialItem}>
                            <IconF name="star-o" size={30} style={{ color: '#3b5998', marginTop: 5 }}></IconF>
                            <Text style={styles.screenTextStyle}>Rate us</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.sharemesage}>
                        <View style={styles.socialItem}>
                            <IconF name="share-alt" size={30} style={{ color: '#3b5998', marginTop: 5 }}></IconF>
                            <Text style={styles.screenTextStyle}>Share</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.navigateToScreen('Aboutus')}>
                        <View style={styles.socialItem}>
                            <IconF name="mobile" size={30} style={{ color: '#3b5998', marginTop: 5, marginLeft: 8 }}></IconF>
                            <Text style={styles.screenTextStyle}>About Us</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback onPress={this.navigateToScreen('PPolicy')}>
                        <View style={styles.socialItem}>
                            <IconF name="flag" size={20} style={{ color: '#3b5998', marginTop: 5, marginLeft: 8 }}></IconF>
                            <Text style={[styles.screenTextStyle, { marginLeft: 0 }]}> Privacy Policy</Text>
                        </View>

                    </TouchableWithoutFeedback>

                </View>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    socialItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginVertical: 5
    },
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 150,
    },
    headerText: {
        color: 'blue',
    },
    screenContainer: {
        paddingTop: 5,
        width: '100%',
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 10,
        textAlign: 'left',
        width: "90%",


    },
    selectedTextStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
    activeBackgroundColor: {
        backgroundColor: 'rgba(48, 48, 53,0.4)',
        borderRadius: 2,


    }
});
