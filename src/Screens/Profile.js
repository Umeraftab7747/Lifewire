import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import AppInput from "../Components/AppInput";
import AppButton from "../Components/AppButton";

const Profile = () => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.headerCOntainer}></View>
      <View style={styles.ImgCOntainer}>
        <Image
          style={styles.Imgs}
          source={require("../../assets/Images/imgs.png")}
        />
      </View>

      <View style={styles.Sapce} />
      <AppInput MainText={"Name"} Placeholder={"Your Name"} />
      <AppInput MainText={"Phone no"} Placeholder={"Your Phone no"} />
      <AppInput MainText={"Email"} Placeholder={"Your Email"} />

      <View style={styles.Sapce2} />
      <AppButton text={"Settings"} />
      <View style={styles.Sapce3} />
      <AppButton text={"Logout"} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  headerCOntainer: {
    backgroundColor: "#5A287F",
    width: "100%",
    height: h("30"),
  },
  ImgCOntainer: {
    backgroundColor: "#fff",
    width: 120,
    height: 120,
    alignSelf: "center",
    position: "absolute",
    top: 170,
    borderRadius: h("100%"),
  },
  Imgs: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Sapce: {
    width: "100%",
    height: h("10%"),
  },
  Sapce2: {
    width: "100%",
    height: h("5%"),
  },
  Sapce3: {
    width: "100%",
    height: h("2%"),
  },
});
