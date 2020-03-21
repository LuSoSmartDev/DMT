
import React, { Component } from 'react';
import {View} from 'react-native'

class CircleShapeView extends Component {
    render() {
        const { R,color} = this.props;
        return(
            <View style = {{
                width: R,
                height: R,
                borderRadius: R/2,
                backgroundColor: color
            }}>
            </View>
        );
    }
}
export default CircleShapeView;