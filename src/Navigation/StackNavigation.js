import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens
import Splash from "../Screens/Splash";
import Screentwo from "../Screens/Screentwo";
import Screenthree from "../Screens/Screenthree";
import ScreeenFour from "../Screens/ScreeenFour";
import ScreenFive from "../Screens/ScreenFive";
import ScreenSix from "../Screens/ScreenSix";
import Screenseven from "../Screens/Screenseven";

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screentwo" component={Screentwo} />
        <Stack.Screen name="ScreenSix" component={ScreenSix} />
        <Stack.Screen name="Screenthree" component={Screenthree} />
        <Stack.Screen name="ScreeenFour" component={ScreeenFour} />
        <Stack.Screen name="ScreenFive" component={ScreenFive} />
        <Stack.Screen name="Screenseven" component={Screenseven} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
