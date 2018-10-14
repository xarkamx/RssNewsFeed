import React from 'react';
import {
    Image,
    Text,
    WebView,
    Dimensions,
    View,
} from 'react-native';
import style from './styles/style.json';
/**
 * @description Create card fullscreen size
 * @param {string} src
 * @param {string} text 
 */
export class FullScreenCard extends React.Component {
    constructor() {
        super();
        this.state = { demo: "esto es un" };
    }
    screenSize() {
        return { width: Dimensions.get('window').width, height: Dimensions.get('window').height }
    }
    render() {
        const { img, text, title } = this.props;
        return (<View style={this.screenSize()}>
            <Image
                source={{ uri: img }}
                style={{
                    flex: 1,
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                }}
            />
            <View style={style.tabBarInfoContainer}>
                <Text style={style.title}>{title}</Text>
                <Text style={{ fontSize: 15, textAlign: "justify", color: "white" }}>{text}</Text>
            </View>
        </View>);
    }
}