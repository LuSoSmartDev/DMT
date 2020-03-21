import {View,Text} from 'react-native'
import React, { PureComponent } from 'react'
import TriangleShapeView from '../components/TriangleShapeView'
class Triangle extends PureComponent {
    render(){
        return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TriangleShapeView/>
                </View>
          );
    }
}

export default Triangle;