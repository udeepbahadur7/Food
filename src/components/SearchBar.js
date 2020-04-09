import React from 'react';
// import {Feather} from '@expo/vector-icons';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import yelp from '../api/yelp';
function SearchBar({searchTerm, onSearchTermChange, onEndEditing}) {
  return (
    <View style={styles.viewStyle}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={searchTerm}
        onChangeText={newSearchTerm => onSearchTermChange(newSearchTerm)}
        onEndEditing={onEndEditing}
        placeholder="Search"
        style={styles.inputStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 15,
    flexDirection: 'row',
    backgroundColor: 'teal',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
