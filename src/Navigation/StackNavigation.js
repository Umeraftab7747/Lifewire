import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// screens
import Splash from "../Screens/Splash";
import Screentwo from "../Screens/Screentwo";
import Screenthree from "../Screens/Screenthree";
import ScreeenFour from "../Screens/ScreeenFour";
import ScreenFive from "../Screens/ScreenFive";
import ScreenSix from "../Screens/ScreenSix";
import Screenseven from "../Screens/Screenseven";
import ScreenEight from "../Screens/ScreenEight";
import Dashbord from "../Screens/Dashbord";
import ItemDetail from "../Screens/ItemDetail";
import Cart from "../Screens/Cart";
import Profile from "../Screens/Profile";
import MainSetting from "../Screens/MainSetting";
import GeneralScreen from "../Screens/GeneralScreen";
import Themepage from "../Screens/Themepage";
import CollectionScreen from "../Screens/CollectionScreen";
import BoostScreen from "../Screens/BoostScreen";
import About from "../Screens/About";
import PrivacyPolicy from "../Screens/PrivacyPolicy";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#5A287F",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Dashbord"
        component={Dashbord}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="Dashbord" component={Dashbord} />
        <Stack.Screen name="Screentwo" component={Screentwo} />
        <Stack.Screen name="ScreenSix" component={ScreenSix} />
        <Stack.Screen name="Screenthree" component={Screenthree} />
        <Stack.Screen name="ScreeenFour" component={ScreeenFour} />
        <Stack.Screen name="ScreenFive" component={ScreenFive} />
        <Stack.Screen name="Screenseven" component={Screenseven} />
        <Stack.Screen name="ScreenEight" component={ScreenEight} />
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        <Stack.Screen name="MainSetting" component={MainSetting} />
        <Stack.Screen name="GeneralScreen" component={GeneralScreen} />
        <Stack.Screen name="Themepage" component={Themepage} />
        <Stack.Screen name="CollectionScreen" component={CollectionScreen} />
        <Stack.Screen name="BoostScreen" component={BoostScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Splash" component={Splash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
