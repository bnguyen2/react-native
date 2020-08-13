import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child 1</Text>
      <Text style={styles.textTwoStyle}>Child 2</Text>
      <Text style={styles.textThreeStyle}>Child 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    height: 50,
    width: 75,
    alignSelf: 'flex-start',
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    height: 50,
    width: 75,
    alignSelf: 'flex-start',
    top: 30,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    height: 50,
    width: 75,
    alignSelf: 'flex-start',
  },
});

export default BoxScreen;
