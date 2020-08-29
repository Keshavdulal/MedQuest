import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColoredButtons = ({ name, hexCode }) => {
  const btnColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.btnGeneric, btnColor]}>
      <Text style={styles.text}>Hello {name}</Text>
    </View>
  );
};

export default ColoredButtons;

const styles = StyleSheet.create({
  btnGeneric: {
    // flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
