import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

import TimeCard from './TimeCard';

import strings from '../strings';

const Destination = ({ destinationTerminal, schedule }) => {
  console.log(schedule);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.destinationTerminal}>
        {strings.formattedTerminalNames[destinationTerminal]}
      </Text>
      <View style={styles.sailings}>
        <TimeCard
          time={schedule[destinationTerminal][0].time}
          capacity={schedule[destinationTerminal][0].capacity}
        />
        <TimeCard
          time={schedule[destinationTerminal][1].time}
          capacity={schedule[destinationTerminal][1].capacity}
        />
        <TimeCard
          time={schedule[destinationTerminal][2].time}
          capacity={schedule[destinationTerminal][2].capacity}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 'auto',
  },
  sailings: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  destinationTerminal: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 25,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default Destination;
