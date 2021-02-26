import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native';

import AppView from './AppView';

const ferrytimesUrl = 'https://www.ferrytimes.ca/api/'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [shouldRefresh, setShouldRefresh] = useState(false)

  useEffect(() => {
    fetch(ferrytimesUrl)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, [shouldRefresh])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <AppView data={data} />
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