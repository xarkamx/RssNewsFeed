import React from 'react';
import {
    ScrollView
} from 'react-native';
export class SwipeView extends React.Component {
    getPositions() {
        const { children } = this.props;
        React.Children.map(children, child => {
            console.log(Object.keys(child));
        });
    }
    render() {
        this.getPositions();
        return (<ScrollView>
            {this.props.children}
        </ScrollView>
        );
    }
}