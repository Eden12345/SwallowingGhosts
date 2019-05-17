import React from 'react'
import { View, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'

import Title from './Title.js'
import Reader from './Reader.js'

const storyMap = [
  { view: 'reader', chapter: 'chapter1', nextView: 2 }, // Index 0 = Intro Chapter
  { view: 'selection', optionOne: 2, optionTwo: 2, optionThree: 2 }, // Index 1 = Selection 1
  { view: 'reader', chapter: 'chapter2', nextView: 3 }, // Index 2 = Chapter 1
  {
    view: 'path',
    optionOne: { index: 4, symbol: 'circle' },
    optionTwo: { index: 4, symbol: 'circle' },
  }, // Index 3 = Path decision 1
  { view: 'reader', chapter: 'chapter1', nextView: 5 }, // Index 4 = Chapter 2
  { view: 'reader', chapter: 'chapter2', nextView: 6 }, // Index 5 = Chapter 3
  { view: 'end' }, // Index 6 = End
]

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { view: 'title', text: 'hey' }
  }

  componentDidMount() {
    setTimeout(() => this.setState(storyMap[0]), 7000)
  }

  handleClick(storyMapIndex) {
    this.setState(storyMap[storyMapIndex])
  }

  render () {
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.gradient}
          colors={['#ffffff', '#bfbfbf']}
          start={[0, 0]}
          end={[1, 1]}
        >
          {this.state.view === 'title' && <Title />}
          {this.state.view === 'reader' && (
            <Reader
              chapter={this.state.chapter}
              handleClick={this.handleClick}
              nextView={this.state.nextView}
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
