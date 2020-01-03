import React from 'react';
import { Animated, Text, View } from 'react-native';

class BottomtoTop extends React.Component {
  state = {
    BottomtoTopv: new Animated.Value(50),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.BottomtoTopv,            // The animated value to drive
      {
        toValue: 0, 
        duration: 1500,              // Make it take a while
      }
    ).start();                        // Starts the animatio
  }

  render() {
    let { BottomtoTopv } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          marginTop: BottomtoTopv,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default BottomtoTop;