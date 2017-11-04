import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class helloComponent extends Component {
    render() {
        return <Text style={{fontSize: 30, backgroundColor: 'red'}}>Hello FirstComponent!</Text>
        // return <Text style={this.prototype.style}>Hello FirstComponent!</Text>
    }
}