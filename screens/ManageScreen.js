import { Text, View, StyleSheet } from 'react-native';
import MyTabs from '../componenets/navBar';

const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: "#F3EFE0"
    }
});

const ManageScreen = ({navigation}) => {
    return(
        
        <View style = {styles.container}>
             <MyTabs navigation={navigation} />
            <Text>Manage Screen</Text>
        </View>
    )
}

export default ManageScreen;