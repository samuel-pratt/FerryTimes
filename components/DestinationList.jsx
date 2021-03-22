import React from 'react';
import { StyleSheet, SafeAreaView, Text, ActivityIndicator } from 'react-native';

import Destination from './Destination';

const DestinationList = ({departureTerminal, schedule}) =>  {
  const isLoading = schedule.tsawwassen ? false : true;
  console.log(isLoading)
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Destination destinationTerminal={'swartz bay'} schedule={schedule['tsawwassen']['swartz bay']} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default DestinationList;