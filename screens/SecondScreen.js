import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyTabs from '../componenets/navBar'

export default function SecondScreen() {
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
  },
});