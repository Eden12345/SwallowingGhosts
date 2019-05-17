import React from 'react'
import { Animated, View, Text, StyleSheet, Platform } from 'react-native'
import { LinearGradient } from 'expo'

import Title from './Title.js'
import Reader from './Reader.js'
import Selection from './Selection.js'
import Path from './Path.js'

const storyMap = [
  { view: 'reader', chapter: 'chapter1', nextView: 1 },
  {
    view: 'selection',
    options: [
      { index: 2, chapter: 'chapter2' },
      { index: 3, chapter: 'chapter3' },
      { index: 4, chapter: 'chapter4' },
    ],
  },
  { view: 'reader', chapter: 'chapter2', nextView: 3 },
  { view: 'reader', chapter: 'chapter3', nextView: 4 },
  { view: 'reader', chapter: 'chapter4', nextView: 5 },
  {
    view: 'path',
    options: [
      { index: 6, chapter: 'chapter5', symbol: 'circle' },
      { index: 7, chapter: 'chapter6', symbol: 'circle' },
    ],
  },
  { view: 'reader', chapter: 'chapter5', nextView: 7 },
  { view: 'reader', chapter: 'chapter6', nextView: 8 },
  { view: 'end' },
]

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 'title' }
    this.mainViewOpacity = new Animated.Value(1)
    this.fadeTimeout = 0
    this.handlePress = this.handlePress.bind(this)
    this.fadeMainView = this.fadeMainView.bind(this)
  }

  componentDidMount() {
    this.fadeTimeout = setTimeout(() => {
      this.fadeMainView(0, 1)
      setTimeout(() => this.fadeMainView(1, 4600), 5)
      this.setState(storyMap[0])
    } , 8000)
  }

  fadeMainView(opacityValue, duration = 400) {
    Animated.timing(
      this.mainViewOpacity,
      {
        toValue: opacityValue,
        duration: duration,
      }
    ).start()
  }

  handlePress(storyMapIndex, cancelFadeTimeout) {
    if (cancelFadeTimeout) { clearTimeout(this.fadeTimeout) }
    this.fadeMainView(0)
    setTimeout(() => {
      this.setState(storyMap[storyMapIndex])
      this.fadeMainView(1)
    }, 505)
  }

  render () {
    const { view, chapter, nextView, options } = this.state

    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          colors={['#ffffff', '#a6a6a6']}
          start={[0, 0]}
          end={[1, 1]}
        >
          <Animated.View style={{ opacity: this.mainViewOpacity }}>
            {view === 'title' && (
              <Title handlePress={this.handlePress}/>
            )}
            {view === 'reader' && (
              <Reader
                chapter={chapter}
                nextView={nextView}
                handlePress={this.handlePress}
              />
            )}
            {view === 'selection' && (
              <Selection
                options={options}
                handlePress={this.handlePress}
              />
            )}
            {view === 'path' && (
              <Path
                options={options}
                handlePress={this.handlePress}
              />
            )}
            {view === 'end' && (
              <View style={styles.endTextContainer}>
                <Text style={styles.endText}>E</Text>
                <Text style={styles.endText}>N</Text>
                <Text style={styles.endText}>D</Text>
              </View>
            )}
          </Animated.View>
        </LinearGradient>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  endTextContainer: {
    shadowOffset: { width: 45, height: 55, },
    shadowColor: 'black',
    shadowOpacity: .7,
    flexDirection: 'row',
  },
  endText: {
    shadowOffset: { height: 1, },
    shadowColor: 'black',
    shadowOpacity: .2,
    margin: 10,
    color: '#fff',
    fontSize: 18,
    fontFamily: (Platform.OS === 'ios') ? 'System' : 'sans-serif-light',
  }
})
