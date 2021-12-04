import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

//components
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading';
//APIS
import Config from '../../../config';
//custom Hooks
import useFetch from '../../components/hooks/useFetch/useFetch';

const Products = ({navigation}) => {
  const {loading, data, error} = useFetch(Config.API_URL);

  const handleSelect = id => {
    navigation.navigate('Detail', {id});
  };

  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleSelect(item.id)} />
  );
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <FlatList data={data} renderItem={renderProduct} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'purple'},
});
export default Products;
