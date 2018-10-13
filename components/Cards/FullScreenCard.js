import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions,
    View,
  } from 'react-native';

/**
 * @description Create card fullscreen size
 * @param {string} src
 * @param {string} text 
 */
export class FullScreenCard extends React.Component {
    screenSize() {
        return {width: Dimensions.get('window').width, height: Dimensions.get('window').height}
    }
    render () {
        const {img,text} = this.props;
        return (<View style={this.screenSize()}>
            <Image 
                source={{uri: img}}
                style={{width: "100%", height: "80%"}}
                />
            <View>
                <Text>{text}</Text>
            </View>
        </View>);
    }
}