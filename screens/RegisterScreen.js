import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyTabs from '../componenets/navBar';
import React from 'react';
import UploadImage from '../componenets/UploadImage';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';


export default function SecondScreen({ navigation }) {
  const [name, setName] = React.useState('');
  const [last, setLast] = React.useState('');
  const [image, setImage] = React.useState({});

  const submitForm = async (e) => {
    e.preventDefault();


    const body = {
      firstname: name,
      lastname: last,
      picture: image.base64
    }

    const config = {
      method: 'post',
      url: '10.32.40.174:80/addImage',
      headers: { 
        'Content-Type': 'multipart/form-data'
      },
      body: body
    };

    axios(config).then(() => {
      alert("New face added")
    }).catch((err) => {
      alert("Oh no, something went wrong!")
      console.log(err)
    })

  }

  return (
    <View style={styles.container}>
      <MyTabs navigation={navigation} />
      <View style={styles.textImage}>
        <Text style={styles.title}>Register User</Text>
        <UploadImage image={image} setImage={setImage} />
        <View style={styles.form}>
          <TextInput style={styles.input}
            onChangeText={e => setName(e)}
            value={name}
            placeholder="Name"
          />
          <TextInput style={styles.input}
            onChangeText={e => setLast(e)}
            value={last}
            placeholder="Last Name"
          />
          <Pressable style={styles.button} onPress={submitForm}><Text>Send</Text></Pressable>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "#F3EFE0"
  },
  textImage: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 30,
    padding: 10
  },
  image: {
    width: 250,
    height: 250
  },
  form: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    backgroundColor: '#22A39F',
    width: 300,
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  }
});