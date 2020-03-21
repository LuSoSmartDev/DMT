import {View,Text} from 'react-native'
import React, { PureComponent } from 'react'
import SquareShapeView from '../components/SquareShapeView'
class Square extends PureComponent {
    render(){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <SquareShapeView width = {100} height = {100} color =  {'#14ff5f'} />
            </View>
          
          );
    }
}

export default Square;