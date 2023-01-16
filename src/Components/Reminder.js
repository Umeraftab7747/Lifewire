import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

const Reminder = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.LeftCOntainer}>
        <Text style={styles.leftText}>
          How many motivation reminders in a day?
        </Text>
      </View>
      <View style={styles.RightCOntainer}>
        <TouchableOpacity style={styles.BtnContainer}>
          <Ionicons name="add-outline" size={25} color="#0007" />
        </TouchableOpacity>
        <Text style={styles.leftText}>2</Text>
        <TouchableOpacity style={styles.BtnContainer}>
          <Ionicons name="remove-outline" size={25} color="#0007" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reminder;

const styles = StyleSheet.create({
  Maincontainer: {
    width: "90%",
    height: h("7%"),
    backgroundColor: "#0003",
    flexDirection: "row",
  },
  LeftCOntainer: {
    width: "65%",
    height: "100%",
    justifyContent: "center",
    // alignItems: "center",
    paddingLeft: h("1%"),
    // backgroundColor: "red",
  },
  BtnContainer: {
    width: 35,
    height: 35,
    // backgroundColor: "black",
    borderRadius: 1,
    borderColor: "#0003",
    borderWidth: h("0.2%"),
    justifyContent: "center",
    alignItems: "center",
  },
  RightCOntainer: {
    width: "35%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  leftText: {
    color: "#000",
    fontSize: h("1.9%"),
  },
});
