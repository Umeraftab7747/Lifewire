import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import { ColorPicker } from "react-native-color-picker";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";

const Themepage = () => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>Theme</Text>
      </View>
      {/* Header */}

      <View style={styles.SupportText}>
        <Text style={styles.MStext}>Select your Theme</Text>
      </View>

      <View style={styles.COlorPicker}>
        <ColorPicker
          onColorSelected={(color) => alert(`Color selected: ${color}`)}
          style={{ flex: 1 }}
        />
      </View>
      <View style={styles.space} />
      <AppButton text={"Submit"} />
    </View>
  );
};

export default Themepage;

const styles = StyleSheet.create({
  MainSetting: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  headrContainer: {
    backgroundColor: "#5A287F",
    fontWeight: "bold",
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
  },
  cartContainer: {
    color: "#fff",
    fontSize: h("3%"),
    fontWeight: "bold",
  },
  COlorPicker: {
    width: "100%",
    height: h("30%"),
  },
  SupportText: {
    // backgroundColor: "#0003",
    width: "80%",
    height: h("5%"),
    justifyContent: "center",
    marginTop: h("2%"),
  },
  MStext: {
    color: "#0003",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  space: {
    width: "100%",
    height: h("10%"),
  },
});
