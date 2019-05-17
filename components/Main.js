import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { LinearGradient } from 'expo'

import Welcome from './Welcome.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 1 }
  }

  render () {
    const { view } = this.state
    return (
      <View style={styles.container}>
        <LinearGradient style={styles.gradient} colors={['#ffffff', '#bfbfbf']} start={[0, 0]} end={[1, 1]}>
          <Welcome />
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#877391',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
