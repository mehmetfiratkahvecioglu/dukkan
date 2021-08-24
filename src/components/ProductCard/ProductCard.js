import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
//style
import styles from './ProductCard.style';
const ProductCard = ({product, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: product.image,
          }}
        />
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ProductCard;
