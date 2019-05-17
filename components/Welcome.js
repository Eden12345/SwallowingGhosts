import React from 'react'
import { Animated, View, Text, StyleSheet, Platform } from 'react-native'

const hey = { ani: new Animated.Value(0) }

export default class Welcome extends React.Component {
  constructor (props) {
    super(props)

    'WELCOME'.split('').forEach((letter, i) => {
      this[i] = new Animated.Value(0)
    });
  }

  componentDidMount() {
    'WELCOME'.split('').forEach((letter, i) => {
      Animated.timing(
        this[i],
        {
          toValue: 1,
          duration: 1000,
          delay: i * 500,
        }
      ).start()
    });
  }

  render () {
    return (
      <View style={styles.backdrop}>
        {'WELCOME'.split('').map((letter, i) => (
          <Animated.View style={{ opacity: this[i] }}>
            <Text>
              {letter}
            </Text>
          </Animated.View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, .3)',
    margin: 15,
    marginTop: 40,
    padding: 32
  },
  welContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
    // opacity: hey.ani
  },
})
