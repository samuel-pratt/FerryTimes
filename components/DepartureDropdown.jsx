import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import strings from '../strings';

const DepartureDropdown = ({
  options,
  currentSelection,
  setCurrentSelection,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.selected}>
        {strings.formattedTerminalNames[currentSelection]}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
  selected: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 30,
    paddingLeft: 10,
    paddingTop: 20,
  },
});

export default DepartureDropdown;
