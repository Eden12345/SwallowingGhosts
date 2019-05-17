import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'

export default class ArrowButton extends React.Component {
  render () {
    const { handleClick } = this.props
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={handleClick}>
        <Text style={styles.buttonSymbol}>{'>'}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSymbol: {
    color: '#000',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  }
})
