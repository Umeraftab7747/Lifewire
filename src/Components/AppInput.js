import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const AppInput = ({ MainText, Placeholder }) => {
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Maintext}>{MainText}</Text>
      <TextInput style={styles.InputContainer} placeholder={Placeholder} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  MainContainer: {
    width: "90%",
    height: h("8%"),
    marginTop: h("3%"),
  },
  InputContainer: {
    backgroundColor: "rgba(12, 12, 12, 0.2)",
    width: "100%",
    height: "90%",
    paddingLeft: h("1%"),
    borderRadius: h("1%"),
    fontSize: h("2%"),
  },
  Maintext: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
