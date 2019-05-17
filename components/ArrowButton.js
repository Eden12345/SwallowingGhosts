import React from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Platform } from 'react-native'

export default class ArrowButton extends React.Component {
  render () {
    const { handlePress, alt } = this.props
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        {!alt && <Text style={styles.nextSymbol}>{'>'}</Text>}
        {alt && <View style={styles.imageSymbol}></View>}
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    shadowOffset: { height: 1, },
    shadowColor: 'black',
    shadowOpacity: .7,
    height: 80,
    width: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextSymbol: {
    position: 'relative',
    left: 2,
    color: 'white',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  },
  imageSymbol: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'white',
    borderRightColor: 'white',
  }
})
