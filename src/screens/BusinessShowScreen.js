import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
function BusinessShowScreen({navigation, route}) {
  const [business, setBusiness] = useState(null);
  const {id} = route.params;
  const getBusiness = async id => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    getBusiness(id);
  }, [id]);
  console.log(business, '---business');
  if (!business) {
    return null;
  }
  return (
    <>
      <Text>{business.name}</Text>
      <FlatList
        data={business.photos}
        showsVerticalScrollIndicator={false}
        keyExtractor={photo => photo}
        renderItem={({item}) => (
          <Image style={styles.imageStyle} source={{uri: item}} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
  },
});

export default BusinessShowScreen;
