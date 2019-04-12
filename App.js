import React from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';

import string1 from './1.js'
import string2 from './14.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 1 };
  }

  render() {
    const { view } = this.state;
    return (
      <View style={styles.container}>
        {view === 1 && (
          <ScrollView style={styles.scroller}>
            <Text style={styles.text}>{string1}</Text>
            <TouchableOpacity onPress={() => this.setState({ view: 2 })}>
              <Text style={[styles.text, styles.bottomLink]}>{'Next >'}</Text>
            </TouchableOpacity>
            <Text style={styles.text}>hey</Text>
          </ScrollView>
        )}
        {view === 2 && (
          <ScrollView style={styles.scroller}>
            <Text style={styles.text}>{string2}</Text>
            <TouchableOpacity onPress={() => this.setState({ view: 1 })}>
              <Text style={[styles.text, styles.bottomLink]}>{'< Back'}</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#877391',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroller: {
    padding: 30,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
  bottomLink: {
    textAlign: 'center',
    marginBottom: 100,
  }
});
