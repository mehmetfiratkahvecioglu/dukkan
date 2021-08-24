import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: 'purple'},
  bodyContainer: {padding: 10},
  image: {height: deviceSize.height / 2, width: deviceSize.width},
  title: {fontSize: 25, fontWeight: 'bold', color: 'white'},
  description: {fontWeight: 'bold', color: 'white', marginVertical: 5},
  price: {fontWeight: 'bold', color: 'white', textAlign: 'right'},
});
