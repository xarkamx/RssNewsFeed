import React from 'react';
import {
    Image,
    Text,
    WebView,
    Dimensions,
    View,
} from 'react-native';
import { style } from './styles/style.js';
import { CleanText } from '../Texts/CleanText.js';
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
        return {
            width: Dimensions.get('window').width - 5,
            height: Dimensions.get('window').height / 3,
            margin: 2.5
        }
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
                    resizeMode: "cover"
                }}
            />
            <View style={style.tabBarInfoContainer}>
                <CleanText style={{ fontSize: 25, ...style.cardWhiteText }} text={title}></CleanText>
                <CleanText style={{ fontSize: 14, ...style.cardWhiteText }} text={text}></CleanText>
            </View>
        </View>);
    }
}