import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyTabs from '../componenets/navBar'

export default function SecondScreen({navigation}) {
  return (
    <View style = {styles.container}>
      <MyTabs navigation={navigation} />
      <Text> Open App.js to start working on your app! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    fontColor: 'white'
  },
});