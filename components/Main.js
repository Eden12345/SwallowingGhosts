import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

import Title from './Title.js'
import Reader from './Reader.js'
import Selection from './Selection.js'
import Path from './Path.js'

const storyMap = [
  { view: 'reader', chapter: 'chapter1', nextView: 1 }, // Index 0 = Intro Chapter
  {
    view: 'selection',
    options: [
      { index: 2, chapter: 'chapter2' },
      { index: 2, chapter: 'chapter2' },
      { index: 2, chapter: 'chapter2' },
    ],
  }, // Index 1 = Selection 1
  { view: 'reader', chapter: 'chapter2', nextView: 3 }, // Index 2 = Chapter 1
  {
    view: 'path',
    options: [
      { index: 4, chapter: 'chapter1', symbol: 'circle' },
      { index: 4, chapter: 'chapter1', symbol: 'circle' },
    ],
  }, // Index 3 = Path decision 1
  { view: 'reader', chapter: 'chapter1', nextView: 5 }, // Index 4 = Chapter 2
  { view: 'reader', chapter: 'chapter2', nextView: 6 }, // Index 5 = Chapter 3
  { view: 'end' }, // Index 6 = End
]

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 'title' }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setTimeout(() => this.setState(storyMap[0]), 8000)
  }

  handleClick(storyMapIndex) {
    this.setState(storyMap[storyMapIndex])
  }

  render () {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          colors={['#ffffff', '#a6a6a6']}
          start={[0, 0]}
          end={[1, 1]}
        >
          {this.state.view === 'title' && <Title />}
          {this.state.view === 'reader' && (
            <Reader
              chapter={this.state.chapter}
              nextView={this.state.nextView}
              handleClick={this.handleClick}
            />
          )}
          {this.state.view === 'selection' && (
            <Selection
              options={this.state.options}
              handleClick={this.handleClick}
            />
          )}
          {this.state.view === 'path' && (
            <Path
              options={this.state.options}
              handleClick={this.handleClick}
            />
          )}
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
  }
})
