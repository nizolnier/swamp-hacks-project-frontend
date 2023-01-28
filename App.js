import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ManageScreen from "./screens/ManageScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SandBox from "./componenets/sandBox";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    //<SandBox />

         <NavigationContainer>
           <Stack.Navigator>
             <Stack.Screen 
                name = "Home"
                component = {HomeScreen}
               />
             <Stack.Screen
               name = "Register" 
              component = {RegisterScreen}
             />
             <Stack.Screen
               name = "Manage" 
              component = {ManageScreen}
             />
           </Stack.Navigator>
         </NavigationContainer>
  );
}


