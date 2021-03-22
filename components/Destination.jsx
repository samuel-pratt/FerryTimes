import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import TimeCard from './TimeCard';

const Destination = ({destinationTerminal, schedule}) =>  {
  console.log(schedule)
  return (
    <SafeAreaView style={styles.container}>
      {schedule.map(sailing => {
        return (<TimeCard time={sailing.time} capacity={sailing.capacity} />)
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Destination;