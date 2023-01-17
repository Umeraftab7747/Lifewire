import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";
import SettingItem from "../Components/SettingItem";

const GeneralScreen = () => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>Settings</Text>
      </View>
      {/* Header */}
      <Text>GeneralScreen</Text>
    </View>
  );
};

export default GeneralScreen;

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
});
