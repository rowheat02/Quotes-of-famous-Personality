import React from 'react';
import { Animated, Text, View } from 'react-native';

class Lefttoright extends React.Component {
  state = {
    toleftAnim: new Animated.Value(this.props.initial),
    action:this.props.action  // Initial value for opacity: 0
  }

  componentDidMount() {
    const Anima=Animated.timing(                  // Animate over time
      this.state.toleftAnim,            // The animated value to drive
      {
        toValue: this.props.final, 
        duration: 800,              // Make it take a while
      }
    );
    this.state.action&&Anima.start()                        // Starts the animatio
  }

  render() {
    let { toleftAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          marginLeft: toleftAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default Lefttoright;