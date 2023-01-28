import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
import Flex from '../componenets/FlexBox';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Button 
        title = "Navigate to second screen"
        onPress = {() =>navigation.navigate("Second") }
      />
      <Button 
        title = "Navigate to home screen"
        onPress = {() =>navigation.navigate("Second") }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});