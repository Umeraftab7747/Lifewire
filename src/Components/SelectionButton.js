import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const SelectionButton = ({ text }) => {
  const [Selected, SetSelected] = React.useState(true);
  return (
    <>
      {Selected ? (
        <TouchableOpacity
          onPress={() => {
            SetSelected(!Selected);
          }}
          style={styles.MainContainer}
        >
          <Text style={styles.txtcolor2}>{text}</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            SetSelected(!Selected);
          }}
          style={styles.MainContainer2}
        >
          <Text style={styles.txtcolor}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default SelectionButton;

const styles = StyleSheet.create({
  MainContainer: {
    width: "45%",
    height: h("7%"),
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
    borderWidth: h("0.2%"),
    borderColor: "#0003",
  },
  MainContainer2: {
    width: "45%",
    height: h("7%"),
    backgroundColor: "rgba(90, 40, 127, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
    borderWidth: h("0.2%"),
    borderColor: "#0003",
  },
  txtcolor: {
    color: "white",
    fontSize: h("2%"),
  },
  txtcolor2: {
    color: "#000",
    fontSize: h("2%"),
  },
});
