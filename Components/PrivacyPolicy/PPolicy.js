

import React, { Component } from 'react'
import { Text, View,WebView } from 'react-native'

export default class PPolicy extends Component {
    render() {
        return (
            <WebView
            source={{uri: 'https://rowheat02.github.io/AppPrivacyPolicy/'}}
            style={{marginTop: 5}}
          />
        )
    }
}
