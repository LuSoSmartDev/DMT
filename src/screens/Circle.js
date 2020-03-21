import {View,Text} from 'react-native'
import React, { PureComponent } from 'react'
import CircleShapeView from '../components/CircleShapeView'

class Circle extends PureComponent {
    render(){
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <CircleShapeView
                R = {150}
                color = {'#FF00FF'}
              />
          </View>
      );
    }
}

export default Circle;