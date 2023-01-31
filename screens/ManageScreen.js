import { Text, View, StyleSheet, ScrollView,Button } from 'react-native';
import MyTabs from '../componenets/navBar';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';


const styles = StyleSheet.create({
    container: {
      flex: 3,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: "#F3EFE0"
    },
    text1: {
      fontSize: 30,
      textAlign: 'center',
      color: 'black',
      padding: 30,
    },
    text2:{
      flex: 1,
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      backgroundColor:'lightgreen',
      alignItems: 'center',
      paddingRight:80
    },
    text3:{
      flex:1,
      fontSize: 20,
      textAlign: 'center',
      color: 'black',
      alignItems: 'flex-start',
      paddingRight:10
    },
    userLayout: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      paddingLeft: 20, 
     
    }
});

const ManageScreen = ({navigation}) => {
  const [users, setUsers] = useState([
    {name: 'William', allow: true, key: '1'},
    {name: 'Konstantine', allow: true, key: '2'},
    {name: 'Maria', allow: true, key: '3'},
    {name: 'Nicole', allow: true, key: '4'},
  ]);

    return(
        <View style = {styles.container}>
            <MyTabs navigation={navigation} />
            
            <Text style = {styles.text1}>Manage Users</Text>
            <ScrollView >
              {users.map(item => (
                <View style = {styles.userLayout} key={item.key}>
                  <Text style= {styles.text2}>{item.name}</Text>
                  <Text style= {styles.text3}>{item.allow === true? "Allowed" : "Not Allowed"}</Text>
                  <Button style= {styles.text3} title = "Delete"> Delete</Button>
                </View>
              ))}
           </ScrollView>
          <StatusBar style="auto" />
        </View>
    )
}

export default ManageScreen;