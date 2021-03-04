import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import DepartureDropdown from './components/DepartureDropdown';
import Destinations from './components/Destinations';

const departureTerminals = [
  "tsawwassen",
  "swartz-bay",
  "nanaimo-(duke-pt)",
  "nanaimo-(dep.bay)",
  "horseshoe-bay",
  "langdale"
];

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
};

const ferrytimesUrl = 'https://www.ferrytimes.ca/api/'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('Tsawwassen');

  useEffect(() => {
    fetch(ferrytimesUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, [shouldRefresh]);

  return (
    <SafeAreaView style={styles.container}>
      <DepartureDropdown options={departureTerminals} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Destinations destination={currentSelection} schedule={data} />
      )}
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

export default App;