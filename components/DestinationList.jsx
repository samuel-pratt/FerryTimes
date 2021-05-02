import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  ActivityIndicator,
} from 'react-native';

import Destination from './Destination';

import strings from '../strings';

const DestinationList = ({ departureTerminal, schedule }) => {
  const isLoading = schedule.tsawwassen ? false : true;
  console.log(isLoading);
  return (
    <SafeAreaView style={styles.container}>
      {strings.destinationTerminals[departureTerminal].map((destination) => {
        return (
          <Destination
            destinationTerminal={destination}
            schedule={schedule[departureTerminal]}
          />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default DestinationList;
