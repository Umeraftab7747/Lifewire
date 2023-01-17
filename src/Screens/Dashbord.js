import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import SelectionButton from "../Components/SelectionButton";
import AppSearch from "../Components/AppSearch";
import Item from "../Components/Item";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-145571e29d72",
    title: "Third Item",
  },
];

const Dashbord = ({ navigation }) => {
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.MainHeaderText}>Welcome to our Store</Text>
          <AppSearch />
        </View>

        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={({ item }) => (
            <Item
              onPress={() => {
                navigation.navigate("ItemDetail");
              }}
            />
          )}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{
            justifyContent: "space-evenly",
            marginTop: h("1%"),
          }}
        />
      </View>
    </>
  );
};

export default Dashbord;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    height: h("20%"),
    backgroundColor: "#5A287F",
    alignItems: "center",
  },
  MainHeaderText: {
    color: "#fff",
    fontSize: h("2%"),
    fontWeight: "bold",
    marginTop: h("5%"),
  },
});
