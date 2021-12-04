import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

//style
import styles from './Button.style';

const Button = ({titleProp, onpressProp, loading}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onpressProp}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color={'white'} />
      ) : (
        <Text style={styles.text}>{titleProp}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
