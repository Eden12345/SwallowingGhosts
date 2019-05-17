import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import ArrowButton from './ArrowButton.js'
import text from '../TEXT.js'

export default class Selection extends React.Component {
  render () {
    const { options, handleClick } = this.props;
    console.log(options[0])
    return (
      <View style={styles.container}>
        <View style={styles.option}>
          <ArrowButton
            handleClick={() => handleClick(options[0].index)}
            alt
          />
          <Text>{text[options[0].chapter].title}</Text>
        </View>
        <View>
          <View style={styles.spacer}></View>
          <View style={styles.divider}></View>
          <View style={styles.spacer}></View>
        </View>
        <View style={styles.option}>
          <ArrowButton
            handleClick={() => handleClick(options[1].index)}
            alt
          />
          <Text>{text[options[1].chapter].title}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  option: {
    height: 130,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  divider: {
    marginLeft: 50,
    marginRight: 50,
    height: 2,
    width: 280,
    backgroundColor: '#000',
  },
})
