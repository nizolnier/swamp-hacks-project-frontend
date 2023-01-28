import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SandBox from "./componenets/sandBox";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SandBox />

        // <NavigationContainer>
        //   <Stack.Navigator>
        //     <Stack.Screen 
        //        name = "Home"
        //        component = {HomeScreen}
        //       />
        //     <Stack.Screen
        //       name = "Second" 
        //      component = {SecondScreen}
        //     />
        //   </Stack.Navigator>
        // </NavigationContainer>
  );
}


