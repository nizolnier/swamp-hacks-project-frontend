import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, Text } from 'react-native';
import Flex from '../componenets/FlexBox';
import MyTabs from '../componenets/navBar';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    //alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#F3EFE0"
  },
  row: {
    flexDirection: "row"
  }, 
  boxOne: {
    backgroundColor: 'skyblue',
    textAlign: 'center',
    padding: 10,
  },
  boxTwo: {
    alignItems: 'flex-start',
    padding: 10,
  }
});

const Row = ({ children }) => (
  <View style={styles.row}>{children}</View>
)
const Col = ({ numRows, children }) => {
  return  (
    <View style={styles[`${numRows}col`]}>{children}</View>
  )
}

export default function HomeScreen({navigation}) {
  return (
     <View style={styles.container}>
      <MyTabs navigation = {navigation} /> 
      <Text style= {styles.boxOne}> Welcome To 'Does it ring a bell'</Text>
       <Button 
         title = "Navigate to second screen"
         onPress = {() =>navigation.navigate("Second") }
       />
       {/* <Button 
         title = "Navigate to home screen"
         onPress = {() =>navigation.navigate("Second") }
      /> */}
       <StatusBar style="auto" />
     </View>
  );
}


