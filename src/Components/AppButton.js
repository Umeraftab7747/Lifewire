import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const AppButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <Text style={styles.TextOne}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  mainContainer: {
    width: "70%",
    height: h("7%"),
    backgroundColor: "#5A287F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
  },
  TextOne: {
    color: "#fff",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
