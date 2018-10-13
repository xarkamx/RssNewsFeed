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

export class FullScreenCards extends React.Component {
    render () {
        return (<View style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}>
            <Image 
                source={{uri: "https://dummyimage.com/400x800/000/fff"}}
                style={{width: "100%", height: "80%"}}
                />
            <View>
                <Text>Hola Tarjeta</Text>
            </View>
        </View>);
    }
}