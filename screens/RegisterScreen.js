import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MyTabs from '../componenets/navBar';
import React from 'react';

export default function SecondScreen({ navigation }) {
  const [name, onChangeName] = React.useState('');
  const [last, onChangeLast] = React.useState('');

  return (
    <View style={styles.container}>
      <MyTabs navigation={navigation} />
      <View style={styles.textImage}>
        <Text style={styles.title}>Register User</Text>
        <Image style={styles.image} source={require('../assets/img.png')} />
        <View style={styles.form}> 
          <TextInput style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name"
          />
          <TextInput style={styles.input}
            onChangeText={onChangeLast}
            value={last}
            placeholder="Last Name"
          />
          <Pressable style={styles.button}><Text>Send</Text></Pressable>
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
    flex : 1,
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