
import React, { Component } from 'react';
import {View} from 'react-native'

class SquareShapeView extends Component {
    render() {
        const { width,height,color} = this.props;
        return(
            <View style = {{
                  width: width,
                  height: height,
                  backgroundColor: color,
            }}>
        </View>);
    }
}
export default SquareShapeView;