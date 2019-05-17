import React from 'react'
import { ScrollView, View, Text, StyleSheet, Platform } from 'react-native'

import ArrowButton from './ArrowButton.js'
import text from '../TEXT.js'

export default class Reader extends React.Component {
  componentDidUpdate() {
    this.scroller.scrollTo({ y: 0, animated: false })
  }

  render () {
    const { handlePress, nextView } = this.props;

    return (
      <ScrollView
        style={styles.scroller}
        ref={node => this.scroller = node }
      >
        <View style={styles.container}>
          <Text style={styles.chapterTitle}>
            {text[this.props.chapter].title}
          </Text>
          <Text style={styles.chapterContent}>
            {text[this.props.chapter].content}
          </Text>
          <ArrowButton handlePress={() => handlePress(nextView)}  />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scroller: {
    flex: 1,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 70,
  },
  chapterTitle: {
    marginTop: 120,
    color: 'black',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  },
  chapterContent: {
    marginVertical: 70,
    marginLeft: 30,
    marginRight: 30,
    color: 'black',
    fontSize: 13,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  }
})
