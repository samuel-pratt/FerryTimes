import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import DepartureDropdown from './components/DepartureDropdown';
import Destinations from './Destinations';

const departureTerminals = [
  "tsawwassen",
  "swartz-bay",
  "nanaimo-(duke-pt)",
  "nanaimo-(dep.bay)",
  "horseshoe-bay",
  "langdale"
]

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

const AppView = ({data}) =>  {
  const [currentlySelected, setCurrentlySelected] = useState("tsawwassen");

  console.log(data)
  return (
    <SafeAreaView style={styles.container}>
      <DepartureDropdown options={departureTerminals} />
      <Destinations />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppView;