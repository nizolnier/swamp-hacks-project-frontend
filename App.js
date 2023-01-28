import HomeScreen from "./screens/HomeScreen";
import SecondScreen from "./screens/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name = "Home"
            component = {HomeScreen}
            options = {{title: "Does It Ring The Bell?"}}
        />
        <Stack.Screen
          name = "Second" 
          component = {SecondScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


