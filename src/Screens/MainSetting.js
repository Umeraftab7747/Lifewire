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
      {/* <SettingItem
        name={"Manage Subscription"}
        img={require("../../assets/Images/icon1.png")}
        onPress={() => {
          navigation.navigate("GeneralScreen");
        }}
      /> */}
      <View style={styles.SupportText}>
        <Text style={styles.MStext}>General Settings</Text>
      </View>
      <SettingItem
        name={"Theme"}
        onPress={() => {
          navigation.navigate("Themepage");
        }}
        img={require("../../assets/Images/icon2.png")}
      />
      <SettingItem
        name={"Collection"}
        onPress={() => {
          navigation.navigate("CollectionScreen");
        }}
        img={require("../../assets/Images/icon3.png")}
      />
      <SettingItem
        onPress={() => {
          navigation.navigate("BoostScreen");
        }}
        name={"Boost"}
        img={require("../../assets/Images/icon4.png")}
      />

      <View style={styles.SupportText}>
        <Text style={styles.MStext}>Support us</Text>
      </View>
      <SettingItem
        onPress={() => {
          navigation.navigate("About");
        }}
        name={"About us"}
        img={require("../../assets/Images/icon7.png")}
      />
      <SettingItem
        onPress={() => {
          navigation.navigate("BoostScreen");
        }}
        name={"FAQs"}
        img={require("../../assets/Images/icon6.png")}
      />
      <SettingItem
        onPress={() => {
          navigation.navigate("PrivacyPolicy");
        }}
        name={"Privacy Policy"}
        img={require("../../assets/Images/icon5.png")}
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
});
