import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const AppSearch = () => {
  return (
    <View style={styles.MainContainer}>
      <TextInput
        style={styles.inptContainer}
        placeholder="Search Text"
        placeholderTextColor={"#0006"}
      />
      <View style={styles.RigthContainer}>
        <Ionicons name="search-outline" size={30} color="#0003" />
      </View>
    </View>
  );
};

export default AppSearch;

const styles = StyleSheet.create({
  MainContainer: {
    width: "90%",
    height: h("6.5%"),
    backgroundColor: "#fff",
    borderRadius: h("1%"),
    marginTop: h("1%"),
    flexDirection: "row",
  },
  inptContainer: {
    // backgroundColor: "red",
    width: "80%",
    height: "100%",
    paddingLeft: h("1%"),
    color: "#0006",
    fontSize: h("2%"),
  },
  RigthContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
