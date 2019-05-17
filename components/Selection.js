import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'

import ArrowButton from './ArrowButton.js'
import text from '../TEXT.js'

export default class Selection extends React.Component {
  render () {
    const { options, handleClick } = this.props;
    return (
      <View style={styles.container}>
        {options.map((option, i) => (
          <View style={styles.option} key={i}>
            <ArrowButton handleClick={() => handleClick(option.index)}/>
            <View style={styles.optionTextGroup}>
              <Text style={styles.dateText}>
                Date: 7-11-2049
              </Text>
              <Text style={styles.previewText}>
                {text[option.chapter].content.slice(0, 80) + '...'}
              </Text>
            </View>
          </View>
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option: {
    marginLeft: 30,
    marginRight: 30,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionTextGroup: {
    marginLeft: 30,
    width: 200,
    justifyContent: 'flex-start',
  },
  dateText: {
    color: '#000',
    fontSize: 13,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
    fontStyle: 'italic',
  },
  previewText: {
    color: '#000',
    fontSize: 13,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  }
})
