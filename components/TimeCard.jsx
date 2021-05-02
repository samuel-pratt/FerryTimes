import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const TimeCard = ({ time, capacity }) => {
  const capacityInt = parseInt(capacity, 10);
  let sailingColor;

  if (capacityInt <= 50) {
    sailingColor = '#69B34C';
  } else if (capacityInt <= 75) {
    sailingColor = '#FAB733';
  } else {
    sailingColor = '#FF0D0D';
  }

  const windowWidth = Dimensions.get('window').width;

  const tileWidth = windowWidth / 3.5;

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Medium.ttf'),
  });

  const styles = StyleSheet.create({
    container: {
      width: tileWidth,
      height: tileWidth,
      marginRight: tileWidth / 7,
      backgroundColor: 'white',
      borderRadius: 25,
    },
    time: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: tileWidth / 4,
      paddingTop: 15,
      paddingLeft: 10,
    },
    capacity: {
      fontFamily: 'Roboto',
      fontWeight: '500',
      fontSize: 30,
      textAlign: 'right',
      paddingRight: 10,
      paddingTop: 15,
      color: sailingColor,
    },
    ampm: {
      fontSize: 15,
    },
  });

  const formattedTime = time.split('  (')[0];
  const timeNumbers = formattedTime.split(' ')[0];
  const timeLetters = formattedTime.split(' ')[1];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.time}>
          {timeNumbers}
          <Text style={styles.ampm}> {timeLetters}</Text>
        </Text>
        <Text style={styles.capacity}>{capacity}</Text>
      </View>
    </SafeAreaView>
  );
};

export default TimeCard;
