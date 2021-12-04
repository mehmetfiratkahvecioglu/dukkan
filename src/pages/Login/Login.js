import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text, Alert} from 'react-native';
import {Formik} from 'formik';
//redux
import {useDispatch} from 'react-redux';

//components
import Input from '../../components/Input';
import Button from '../../components/Button';

//hooks
import usePost from '../../components/hooks/usePost';
const Login = ({navigation}) => {
  const {data, loading, error, post} = usePost();
  const dispatch = useDispatch();

  function handleLogin(values) {
    post('https://fakestoreapi.com/auth/login', values);
  }

  if (error) {
    Alert.alert('dükkan', 'bir hata oluştu');
  }

  if (data) {
    if (data.status === 'Error') {
      Alert.alert('dükkan', 'Kullanıcı bulunamadı');
    } else {
      dispatch({type: 'SET_USER', payload: {user}});
    }
  }

  return (
    <Formik initialValues={{username: '', password: ''}} onSubmit={handleLogin}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require('../../assets/logom.png')}
          />
          <Input
            placeholderProp={'Buraya İsim giriniz'}
            onChangeProp={handleChange('username')}
            valueProp={values.username}
            iconName="account"
          />

          <Input
            placeholderProp={'Buraya Şifre giriniz'}
            onChangeProp={handleChange('password')}
            valueProp={values.password}
            iconName="key"
            isSecure
          />
          <Button
            titleProp={'GİRİŞ'}
            onpressProp={handleSubmit}
            loading={loading}
          />
          <Text>{values.username}</Text>
        </View>
      )}
    </Formik>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  img: {
    height: Dimensions.get('window').height / 3.5,
    width: Dimensions.get('window').width * 0.9,
    resizeMode: 'contain',
    margin: 20,
    marginTop: 70,
    alignSelf: 'center',
    tintColor: 'purple',
  },
});

const user = {
  address: {
    geolocation: {lat: '-37.3159', long: '81.1496'},
    city: 'kilcoole',
    street: 'new road',
    number: 7682,
    zipcode: '12926-3874',
  },
  id: 1,
  email: 'john@gmail.com',
  username: 'johnd',
  password: 'm38rmF$',
  name: {firstname: 'john', lastname: 'doe'},
  phone: '1-570-236-7033',
  __v: 0,
};
