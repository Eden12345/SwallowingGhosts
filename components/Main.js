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
        <LinearGradient style={styles.gradient} colors={['#2d262d', '#625d63']} start={[0, 1]} end={[1, 0]}>
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
    justifyContent: 'center'
  },
  gradient: {
    width: '100%',
    height: '100%'
  }
})
