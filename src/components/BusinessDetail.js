import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function BusinessDetail({business}) {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri: business.image_url}} />
      <Text style={styles.name}>{business?.name}</Text>
      <View>
        <Text>
          {business.rating} Stars, {business.review_count} Reviews
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default BusinessDetail;
