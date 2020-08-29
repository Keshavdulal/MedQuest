import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import ColoredButtons from './components/ColoredButtons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to world</Text>
      <ColoredButtons name='Cyan' hexCode='#2aa198' />
      <ColoredButtons name='Blue' hexCode='#268bd2' />
      <ColoredButtons name='Magenta' hexCode='#d33682' />
      <ColoredButtons name='Orange' hexCode='#cb4b16' />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // make is same height as parent
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
