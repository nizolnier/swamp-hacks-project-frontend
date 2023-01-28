import { StyleSheet, Text, View } from 'react-native';
import MyTabs from '../componenets/navBar';

export default function ManageScreen({navigation}) {
    return(
        <View style={styles.container}>
            <MyTabs navigation={navigation} />
            <Text>ManageScreen</Text>
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

})