import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Router from './screens/Router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Router />
        <Title></Title>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 'auto',
    justifyContent: 'center',
  },
});