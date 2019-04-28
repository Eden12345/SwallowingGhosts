import React from 'react'
import { View, ScrollView, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { LinearGradient } from 'expo'

import string1 from '../text/1.js'
import string2 from '../text/14.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 1 }
  }

  render () {
    const { view } = this.state
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#2d262d', '#625d63']} start={[0, 1]} end={[1, 0]}>
          <View style={styles.backdrop}>
            {view === 1 && (
              <ScrollView style={styles.scroller}>
                <Text style={styles.text}>{string1}</Text>
                <TouchableOpacity onPress={() => this.setState({ view: 2 })}>
                  <Text style={[styles.text, styles.bottomLink]}>{'>'}</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
            {view === 2 && (
              <ScrollView style={styles.scroller}>
                <Text style={styles.text}>{string2}</Text>
                <TouchableOpacity onPress={() => this.setState({ view: 1 })}>
                  <Text style={[styles.text, styles.bottomLink]}>{'<'}</Text>
                </TouchableOpacity>
              </ScrollView>
            )}
          </View>
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
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, .3)',
    margin: 15,
    marginTop: 40,
    padding: 32
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light'
  },
  bottomLink: {
    textAlign: 'center'
  }
})