import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, View, Text, ScrollView } from 'react-native';
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
    marginLeft: 10,
    marginRight: 10
  },
  boxTwoTitle:{
    flex: 1,
    padding: 30,
    width: '100%',
    backgroundColor: 'darkgrey'
  },
  text1: {
    fontSize: 30,
    textAlign: 'center',
    color: 'skyblue',
    padding: 10
  },
  text2:{
    fontSize: 20,
    textAlign: 'center',
    color: 'lightgreen',
  },
  text3:{
    fontSize: 20,
    textAlign: 'center',
    color: 'lightgreen',
    paddingLeft: 120
  },
  ringCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 20, 
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: '100%'
    }
});

export default function HomeScreen({navigation}) {
  const [users, setUsers] = useState([
    {name: 'William', allow: true, key: '1'},
    {name: 'Konstantine', allow: true, key: '2'},
    {name: 'Maria', allow: true, key: '3'},
    {name: 'Nicole', allow: true, key: '4'},
  ]);

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
        <Text style= {styles.text1}> Recent Rings </Text>
        {/* <View style ={styles.boxTwoTitle}>
          <Text style= {styles.text1}> Recent Rings </Text>
        </View> */}
        <ScrollView >
          {users.map(item => (
            <View style={styles.ringCard} key={item.key}>
              <Text style= {styles.text2}>{item.name}</Text>
              <Text style= {styles.text3}>{item.allow === true? "Allowed" : "Not Allowed"}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
        {/* <Button 
          title = "Register authorized user"
          onPress = {() =>navigation.navigate("Second") }
        /> */}
       
       <StatusBar style="auto" />
     </View>
  );
}


