
import React, { Component } from 'react';
import {View} from 'react-native'

class TriangleShapeView extends Component {
    render() {
        // const { width,height,color} = this.props;
        return(
            <View style = {{
                width: 0,
                height: 0,
                borderLeftWidth: 60,
                borderRightWidth: 60,
                borderBottomWidth: 120,
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderLeftColor: 'transparent',
                borderRightColor: 'transparent',
                borderBottomColor: '#606070',
            }}>
        </View>);
    }
}
export default TriangleShapeView;