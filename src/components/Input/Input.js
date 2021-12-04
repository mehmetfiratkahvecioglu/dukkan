import React from 'react';
import {TextInput, View} from 'react-native';

//icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//styles
import styles from './Input.style';

const Input = ({
  placeholderProp,
  valueProp,
  onChangeProp,
  iconName,
  isSecure,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={valueProp}
        onChangeText={onChangeProp}
        placeholder={placeholderProp}
        placeholderTextColor={'white'}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="white" />
    </View>
  );
};
export default Input;
