import { Text, View,StyleSheet} from 'react-native';
import MyTabs from '../componenets/navBar';

const ManageScreen = ({navigation}) => {
    return(
        <View style = {styles.container}>
            <MyTabs navigation={navigation} />

            <Text>Manage Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 2,
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: "#F3EFE0"
    },
});
export default ManageScreen;