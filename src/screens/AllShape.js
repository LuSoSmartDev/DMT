import React from 'react';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AllShape extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ShowSquare: false,
      showCircle: false,
      showTriangle: false,
      showRectangle: false,
      oval: false,
    };
  }
  hideAll = () => {
    this.setState({
      ShowSquare: false,
      showCircle: false,
      showTriangle: false,
      showRectangle: false,
      showOval: false,
    });
  };
  ShowSquare = () => {
    this.hideAll();
    this.setState({
      ShowSquare: true,
    });
  };
  showCircle = () => {
    this.hideAll();
    this.setState({
      showCircle: true,
    });
  };
  showTriangle = () => {
    this.hideAll();
    this.setState({
      showTriangle: true,
    });
  };
  showRectangle = () => {
    this.hideAll();
    this.setState({
      showRectangle: true,
    });
  };
  showOval = () => {
    this.hideAll();
    this.setState({
      showOval: true,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={
            this.state.ShowSquare
              ? styles.SquareShapeView
              : this.state.showCircle
                ? styles.CircleShapeView
                : this.state.showRectangle
                  ? styles.RectangleShapeView
                  : this.state.showTriangle
                    ? styles.TriangleShapeView
                    : this.state.showOval
                      ? styles.OvalShapeView
                      : ''
          }
        />
        <TouchableOpacity onPress={this.ShowSquare} active={0.8}>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Square</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showCircle} active={0.8}>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showTriangle} active={0.8}>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Triangle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showRectangle} active={0.8}>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Rectangle</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.showOval} active={0.8}>
          <Text style={{ marginTop: 20, fontSize: 20 }}>Oval</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  CircleShapeView: {
    //To make Circle Shape
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#FF00FF',
  },

  OvalShapeView: {
    //To make Oval Shape
    marginTop: 20,
    width: 100,
    height: 100,
    backgroundColor: '#ED2525',
    borderRadius: 50,
    transform: [{ scaleX: 2 }],
  },
  SquareShapeView: {
    //To make Square Shape
    width: 100,
    height: 100,
    backgroundColor: '#14ff5f',
  },

  RectangleShapeView: {
    //To make Rectangle Shape
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#14ff5f',
  },
  TriangleShapeView: {
    //To make Triangle Shape
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
  },
});
