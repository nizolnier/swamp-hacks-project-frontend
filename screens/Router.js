import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NoInternet from './NoInternet';
import { View, Text } from 'react-native';

const { Navigator, Screen } = createNativeStackNavigator();

const Router = () => {
    return (
        <View>
            <Text>oi oi</Text>
            <NavigationContainer>
                <Navigator initialRouteName="Home">
                    <Screen name="Home" component={HomeScreen} />
                    <Screen name="NoInternet" component={NoInternet} />
                </Navigator>
            </NavigationContainer>
        </View>


    );
};

export default Router;