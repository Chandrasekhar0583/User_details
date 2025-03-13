import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { Mainpage } from './mainpage';
export default  function  App() {
  // const users = await axios.get('https://random-data-api.com/api/users/random_user?size=1');
  // console.log(users);
  return (
    <View>
      
    <Mainpage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
