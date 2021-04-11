import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import DepartureDropdown from './components/DepartureDropdown';
import DestinationList from './components/DestinationList';

import strings from './strings';

const ferrytimesUrl = 'https://www.ferrytimes.ca/api/'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('tsawwassen');

  useEffect(() => {
    fetch(ferrytimesUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, [shouldRefresh]);

  return (
    <SafeAreaView style={styles.container}>
      <DepartureDropdown options={strings.departureTerminals} currentSelection={currentSelection} setCurrentSelection={setCurrentSelection} />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <DestinationList departureTerminal={currentSelection} schedule={data} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;