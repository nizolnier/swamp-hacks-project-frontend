import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import Flex from '../componenets/FlexBox';
import { Video } from 'expo-av';
import MyTabs from '../componenets/navBar';

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: "#F3EFE0"
  },
  row: {
    flexDirection: "column"
  }, 
  boxOne: {
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
  boxTwo: {
    flex : 1,
    alignItems: 'flex-start',
    backgroundColor: 'grey',
    padding: 10,
  },
  text: {
    color: 'white'
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%'
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
      <MyTabs  navigation = {navigation} />
      <View style = {styles.boxOne} >
      <Video
        source={require('../assets/video.mp4')}
        useNativeControls
        resizeMode="cover"
        isLooping
        style={styles.video}
      />
      </View>
      <View style = {styles.boxTwo} >
        <Text style = {styles.text}> Registered Users</Text>
      </View>
        <Button 
          title = "Register authorized user"
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


