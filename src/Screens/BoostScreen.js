import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";
import Item from "../Components/Item";

const BoostScreen = () => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>BOOST</Text>
      </View>
      {/* Header */}
      <View style={styles.ImgContainer}>
        <Image
          style={{ width: "70%", height: "70%", resizeMode: "contain" }}
          source={require("../../assets/Images/icon4.png")}
        />
      </View>
      <Text style={styles.BText}>
        You can get a more quotes/daily affirmations on a selected topic up to
        20, instantly for $0.99 each boost.
      </Text>
      <View style={styles.Space} />
      <AppButton text={"BOOST"} />
    </View>
  );
};

export default BoostScreen;

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
  ImgContainer: {
    width: "70%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  BText: {
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    color: "#0003",
  },
  Space: {
    width: "100%",
    height: h("40%"),
  },
});
