import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 3,
    margin: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    borderRadius: 15,
  },
  image: {width: 100, height: 100, borderRadius: 15},
  innerContainer: {flex: 1, justifyContent: 'space-between', padding: 2},
  title: {fontWeight: 'bold', fontSize: 16},
  price: {
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 10,
  },
});
