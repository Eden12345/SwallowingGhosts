import React from 'react'
import { Animated, View, Text, StyleSheet, Platform } from 'react-native'

const hey = { ani: new Animated.Value(0) }

export default class Welcome extends React.Component {
  constructor (props) {
    super(props)

    // this.backdrop = new Animated.Value(0)
    'WELCOME'.split('').forEach((letter, i) => {
      this[i] = new Animated.Value(0)
    });
  }

  componentDidMount() {
    // Animated.timing(
    //   this.backdrop,
    //   {
    //     toValue: 1,
    //     duration: 2000,
    //   }
    // ).start()
    // setTimeout(() => {
    //   Animated.timing(
    //     this.backdrop,
    //     {
    //       toValue: 0,
    //       duration: 2000,
    //     }
    //   ).start()
    // }, 2500)
    'WELCOME'.split('').forEach((letter, i) => {
      Animated.timing(
        this[i],
        {
          toValue: 1,
          duration: 1200,
          delay: i * 200,
        }
      ).start()
      setTimeout(() => {
        Animated.timing(
          this[i],
          {
            toValue: 0,
            duration: 1200,
          }
        ).start()
      }, 1900 + (i * 200))
    });
  }

  render () {
    return (
      <Animated.View style={{ ...styles.backdrop }}>
        {'WELCOME'.split('').map((letter, i) => (
          <Animated.View style={{ ...styles.textContainer, opacity: this[i] }} key={letter + i}>
            <Text style={styles.text}>
              {letter}
            </Text>
          </Animated.View>
        ))}
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'relative',
    top: -25,
    shadowOffset: { width: 80, height: 80, },
    shadowColor: 'black',
    shadowOpacity: .7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 15
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  },
})
