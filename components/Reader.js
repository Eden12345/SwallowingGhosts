import React from 'react'
import { ScrollView, Text, StyleSheet, Platform } from 'react-native'

import text from '../TEXT.js'

export default class App extends React.Component {
  render () {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.text}>{text[this.props.chapter]}</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginVertical: 70,
    marginLeft: 30,
    marginRight: 30,
    color: '#000',
    fontSize: 13,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  }
})
