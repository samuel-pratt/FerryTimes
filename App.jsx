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
import DropDownPicker from 'react-native-dropdown-picker';

import DestinationList from './components/DestinationList';

import strings from './strings';

const ferrytimesUrl = 'https://www.bcferriesapi.ca/api/';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const dropdownItems = strings.departureTerminals.map((item) => {
    return { label: strings.formattedTerminalNames[item], value: item };
  });

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(dropdownItems);
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
          <DropDownPicker
            open={open}
            value={currentSelection}
            items={items}
            setValue={setCurrentSelection}
            setItems={setItems}
            setOpen={setOpen}
            searchable={false}
            style={styles.dropdown}
            dropDownContainerStyle={{
              width: '80%',
              marginLeft: 10,
              marginTop: 20,
            }}
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
  dropdown: {
    width: '80%',
    marginLeft: 10,
    marginTop: 20,
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
