import React from 'react';
import { WebBrowser } from 'expo';
import {
  TouchableOpacity,
} from 'react-native';
const styles = {
    helpLink: {
        paddingVertical: 15,
      },
      helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
      },
}
export class Anchor extends React.Component{
    render () {
        return (
            <TouchableOpacity onPress={this._onClick.bind(this)} style={styles.helpLink}>
              {this.props.children}
            </TouchableOpacity>
        );
    }
    _onClick = () => {
        WebBrowser.openBrowserAsync(
          this.props.href
        );
      };

}