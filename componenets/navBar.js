import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from "react-native";

const MyTabs = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.navigate("Manage")}>
        <Image source={require('../assets/menu.png')}
          
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image source={require('../assets/bell.png')}
          
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Image source={require('../assets/profile-user.png')}
      />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '10%',
    backgroundColor: '#F3EFE0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '3%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
});


export default MyTabs;