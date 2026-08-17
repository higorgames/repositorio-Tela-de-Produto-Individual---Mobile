import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SplashScreen from "../screens/SplashScreen";
import ProductScreen from "../screens/ProductScreen";

import TabNavigation from "./tabNavigation";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Cadastro"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Tabs"
        component={TabNavigation}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Produto"
        component={ProductScreen}
        options={{
          title: "Produto",
          headerTintColor: "#4A5D23",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

    </Stack.Navigator>
  );
}git push