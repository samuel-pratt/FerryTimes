import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ActivityIndicator,
  Dimensions,
  Pressable,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';

import DepartureDropdown from './components/DepartureDropdown';
import DestinationList from './components/DestinationList';

import strings from './strings';

const ferrytimesUrl = 'https://www.bcferriesapi.ca/api/';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
      .then(() => setShouldRefresh(false))
      .catch((error) => alert(error))
      .finally(setIsLoading(false));
  }, [shouldRefresh]);

  return (
    <SafeAreaView style={styles.container}>
      {isLoading || shouldRefresh || !loaded || !data.tsawwassen ? (
        <ActivityIndicator size="large" style={styles.loading} />
      ) : (
        <View>
          <DepartureDropdown
            options={strings.departureTerminals}
            currentSelection={currentSelection}
            setCurrentSelection={setCurrentSelection}
          />
          <DestinationList
            departureTerminal={currentSelection}
            schedule={data}
          />
        </View>
      )}

      <View style={styles.bottomBar}>
        <View style={styles.smallSpace}></View>
        <View styles={styles.helpCirlce}>
          <Feather name="help-circle" size={28} />
        </View>
        <View style={styles.space}></View>
        <Pressable
          style={styles.refresh}
          onPressOut={() => setShouldRefresh(true)}
        >
          <Feather name="refresh-cw" size={28} />
        </Pressable>
        <View style={styles.smallSpace}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 10,
    fontFamily: 'Roboto',
    fontWeight: '500',
    backgroundColor: '#f0f8ff',
  },
  loading: {
    margin: 'auto',
  },
  bottomBar: {
    marginTop: 'auto',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 15,
    borderStyle: 'solid',
    borderTopWidth: 2,
    width: windowWidth,
  },
  helpCircle: {},
  refresh: {},
  space: { width: windowWidth - 76 },
  smallSpace: { width: 10 },
});

export default App;
