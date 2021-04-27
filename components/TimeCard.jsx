import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

const TimeCard = ({ time, capacity }) => {
  const capacityInt = parseInt(capacity, 10);
  let sailingColor;

  if (capacityInt <= 50) {
    sailingColor = 'green';
  } else if (capacityInt <= 75) {
    sailingColor = 'orange';
  } else {
    sailingColor = 'red';
  }

  const styles = StyleSheet.create({
    container: {
      width: 110,
      height: 110,
      borderColor: sailingColor,
      borderStyle: 'solid',
      borderWidth: 6,
      borderRadius: 25,
      margin: 15,
    },
    inner: {
      margin: 3,
    },
    time: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: 19,
      paddingTop: 15,
    },
    capacity: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: 22,
      textAlign: 'right',
      paddingRight: 10,
      paddingTop: 15,
    },
  });

  const formattedTime = time.split('  (')[0] + '*';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.time}>{formattedTime}</Text>
        <Text style={styles.capacity}>{capacity}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TimeCard;
