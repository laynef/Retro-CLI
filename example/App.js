/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import retro from './retroStyles/retro-bootstrap';
import custom from './styles/index';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textDarkClassName}>Welcome to React Native!</Text>
        <Text style={styles.textMutedClassName}>To get started, edit App.js</Text>
        <Text style={styles.textPrimaryClassName}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(Object.assign({}, retro, custom));
