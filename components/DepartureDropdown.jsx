import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const DepartureDropdown = ({
  options,
  currentSelection,
  setCurrentSelection,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.selected}>{currentSelection}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  selected: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 40,
  },
});

export default DepartureDropdown;
