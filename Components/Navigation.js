import { createStackNavigator,createAppContainer,createSwitchNavigator,createDrawerNavigator} from 'react-navigation'
import Home from '../App'
import QuotesList from './QuotesList'
import AuthorList from './Authors/SelectAutthor'
import AuthorQuotes from './Authors/AutorQuotesList'
import Sidedrawer from './Sidedrawer/Sidedrawer'
import SpecialThanks from '../Components/Specialthanks/Specialthanks'
import PPolicy from '../Components/PrivacyPolicy/PPolicy'
import Aboutus from '../Components/Aboutus'
import Favourites from '../Components/Favourites/Favourites'

import {Dimensions} from 'react-native'

const width= Dimensions.get('window').width;

const drawerConfig={
    drawerWidth:width*0.75,
    contentComponent:Sidedrawer,
}

const Drawernavigation=createDrawerNavigator({
    Home:{
        screen:Home
    },
    AuthorLists:{
        screen:AuthorList
    },
    SpecialThanks:{
        screen:SpecialThanks
    },
    PPolicy:{
        screen:PPolicy
    },
    Aboutus:{
        screen:Aboutus
    }
  


},drawerConfig)

const NAV=createStackNavigator({
    Home:{
        screen:Drawernavigation
    },
    QuotesList:{
        screen:QuotesList
    },
    AuthorList:{
        screen:AuthorList
    },
    AuthorQuotes:{
        screen:AuthorQuotes
    },
    Favourite:{
        screen: Favourites
    }
},{initialRouteName:"Home",headerMode: 'none',mode:'modal'})





export default createAppContainer(NAV)