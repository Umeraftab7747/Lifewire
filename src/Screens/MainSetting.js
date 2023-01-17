import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";
import SettingItem from "../Components/SettingItem";

const MainSetting = ({ navigation }) => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>Settings</Text>
      </View>
      {/* Header */}

      <View style={styles.space} />
      <SettingItem
        name={"General"}
        img={require("../../assets/Images/icon1.png")}
        onPress={() => {
          navigation.navigate("GeneralScreen");
        }}
      />
      <SettingItem
        name={"Theme"}
        img={require("../../assets/Images/icon2.png")}
      />
      <SettingItem
        name={"Collection"}
        img={require("../../assets/Images/icon3.png")}
      />
      <SettingItem
        name={"Boost"}
        img={require("../../assets/Images/icon4.png")}
      />
    </View>
  );
};

export default MainSetting;

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
  space: {
    // backgroundColor: "red",
    width: "100%",
    height: h("4%"),
  },
});
