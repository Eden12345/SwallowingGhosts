import React from 'react'
import { Animated, View, Text, StyleSheet, Platform } from 'react-native'

export default class Title extends React.Component {
  constructor (props) {
    super(props)

    'SWALLOWING'.split('').forEach((letter, i) => {
      this[letter + i] = new Animated.Value(0)
    });

    'GHOSTS'.split('').forEach((letter, i) => {
      this[letter + i] = new Animated.Value(0)
    });
  }

  componentDidMount() {
    'SWALLOWING'.split('').forEach((letter, i) => {
      Animated.timing(
        this[letter + i],
        {
          toValue: 1,
          duration: 1200,
          delay: i * 200,
        }
      ).start()

      setTimeout(() => {
        Animated.timing(
          this[letter + i],
          {
            toValue: 0,
            duration: 1200,
          }
        ).start()
      }, 3000 + (i * 200))
    });

    'GHOSTS'.split('').forEach((letter, i) => {
      Animated.timing(
        this[letter + i],
        {
          toValue: 1,
          duration: 1200,
          delay: 1200 + (i * 200),
        }
      ).start()

      setTimeout(() => {
        Animated.timing(
          this[letter + i],
          {
            toValue: 0,
            duration: 1200,
          }
        ).start()
      }, 1200 + 3000 + (i * 200))
    });
  }

  render () {
    return (
      <View style={{ ...styles.backdrop }}>
        <View style={styles.row}>
        {'SWALLOWING'.split('').map((letter, i) => (
          <Animated.View style={{ ...styles.textContainer, opacity: this[letter + i] }} key={letter + i}>
            <Text style={styles.text}>
              {letter}
            </Text>
          </Animated.View>
        ))}
        </View>
        <View style={styles.row}>
        {'GHOSTS'.split('').map((letter, i) => (
          <Animated.View style={{ ...styles.textContainer, opacity: this[letter + i] }} key={letter + i}>
            <Text style={styles.text}>
              {letter}
            </Text>
          </Animated.View>
        ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdrop: {
    shadowOffset: { width: 80, height: 80, },
    shadowColor: 'black',
    shadowOpacity: .7,
  },
  row: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  },
})
