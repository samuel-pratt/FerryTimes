import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const TimeCard = ({time, capacity}) =>  {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{time}: {capacity}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default TimeCard;