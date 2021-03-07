import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

const destinationTerminals = {
  "tsawwassen": [
      "swartz-bay",
      "southern-gulf-islands",
      "nanaimo-(duke-pt)"
  ],
  "swartz-bay": [
      "tsawwassen",
      "fulford-harbour",
  ],
  "nanaimo-(duke-pt)": [
      "tsawwassen"
  ],
  "nanaimo-(dep.bay)": [
      "horseshoe-bay"
  ],
  "horseshoe-bay": [
      "nanaimo-(dep.bay)",
      "langdale",
      "snug-cove-bowen-island"
  ],
  "langdale": [
      "horseshoe-bay"
  ]
}

const readableNames = {
  "tsawwassen": "Tsawwassen",
  "swartz-bay": "Swartz Bay (Victoria)",
  "southern-gulf-islands": "Southern Gulf Islands ",
  "nanaimo-(duke-pt)": "Duke Point (Nanaimo)",
  "fulford-harbour": "Fullford Harbour (Salt Spring Is.)",
  "nanaimo-(dep.bay)": "Departure Bay (Nanaimo)",
  "horseshoe-bay": "Horseshoe Bay",
  "langdale": "Langdale",
  "snug-cove-bowen-island": "Snug Cove (Bowen Island)"
}

const Destination = ({terminal, schedule}) =>  {
  console.log(terminal);
  console.log(schedule);
  return (
    <SafeAreaView style={styles.container}>
      <Text>{terminal}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});

export default Destination;