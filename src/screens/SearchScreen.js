import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusiness from '../hooks/useBusiness';
import BusinessList from '../components/BusinessList';

function SearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const onSearchTermChange = text => setSearchTerm(text);

  const [searchApi, errorMessage, businesses] = useBusiness();
  console.log(businesses);

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return businesses.filter(result => result.price === price);
  };
  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={onSearchTermChange}
        onEndEditing={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <BusinessList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
        />
        <BusinessList results={filterResultsByPrice('$$')} title="Bit Pricer" />
        <BusinessList
          results={filterResultsByPrice('$$$')}
          title="Big Spender!"
        />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({});

export default SearchScreen;
