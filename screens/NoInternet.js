import { Text, View } from 'react-native';
import MyTabs from '../componenets/navBar'

const NoInternet = () => {
    return (
        <View>
            <MyTabs navigation={navigation} />
            <Text>No Internet</Text>
        </View>
    );
}

export default NoInternet;