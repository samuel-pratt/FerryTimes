import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

import DepartureDropdown from './components/DepartureDropdown';
import DestinationList from './components/DestinationList';

import strings from './strings';

const ferrytimesUrl = 'https://www.bcferriesapi.ca/api/';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const [currentSelection, setCurrentSelection] = useState('tsawwassen');

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Medium.ttf'),
  });

  useEffect(() => {
    fetch(ferrytimesUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, [shouldRefresh]);

  return (
    <SafeAreaView style={styles.container}>
      <DepartureDropdown
        options={strings.departureTerminals}
        currentSelection={currentSelection}
        setCurrentSelection={setCurrentSelection}
      />
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <DestinationList departureTerminal={currentSelection} schedule={data} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingLeft: 20,
    fontFamily: 'Roboto',
    fontWeight: '500',
  },
});

export default App;
