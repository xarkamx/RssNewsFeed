import React from 'react';
import { Text } from 'react-native';
import { Helpers } from '../../core/library/dist/Tools/Helpers';
export class CleanText extends React.Component {
    cleanText(text) {
        let helpers = new Helpers();
        if (text == undefined) {
            return "";
        }
        text = helpers.stripTags(text);
        return text;
    }
    render() {
        const { style, text } = this.props;
        const cleanText = this.cleanText(text) || "";
        return (
            <Text style={style}>
                {cleanText}
            </Text>
        );
    }
}