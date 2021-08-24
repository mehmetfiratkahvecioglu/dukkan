import React from 'react';
import {View, Text, Image} from 'react-native';
import Config from '../../../config';
import useFetch from '../../components/hooks/useFetch/useFetch';
import Loading from '../../components/Loading';

//style
import styles from './Detail.style';

const Detail = ({route}) => {
  const {id} = route.params;
  const {loading, data, error} = useFetch(`${Config.API_URL}/${id}`);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: data.image}} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>Detail! {data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>{data.price} TL</Text>
      </View>
    </View>
  );
};

export default Detail;
