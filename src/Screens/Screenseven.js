import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import EmojiButtn from "../Components/EmojiButtn";

const Screenseven = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/img7.png")}
        />
      </View>

      <Text style={styles.Text2}>How are you feeling lately?</Text>
      <View style={styles.btcEmoji}>
        <EmojiButtn />
        <EmojiButtn />
        <EmojiButtn />
      </View>
      <View style={styles.btcEmoji}>
        <EmojiButtn />
        <EmojiButtn />
        <EmojiButtn />
      </View>

      <View style={styles.Space} />
      <AppButton
        text={"Continue"}
        onPress={() => {
          navigation.navigate("ScreeenFour");
        }}
      />
    </View>
  );
};

export default Screenseven;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  MainImg: {
    // backgroundColor: "white",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: h("3%"),
  },
  imgContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("40%"),
  },
  Text1: {
    color: "#5A287F",
    fontSize: h("4%"),
    fontWeight: "bold",
    marginTop: h("2%"),
    alignSelf: "center",
  },
  Text2: {
    color: "#000",
    fontSize: h("2.7%"),
    marginTop: h("1%"),
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: h("5%"),
  },
  Text3: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("5%"),
    alignSelf: "center",
  },
  Space: {
    marginTop: h("15%"),
  },
  Text4: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("1%"),
  },
  MainBtnContainer: {
    // backgroundColor: "green",
    width: "100%",
    height: h("8%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  BtnContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: h("10%"),
  },
  btcEmoji: {
    // backgroundColor: "red",
    width: "90%",
    height: h("13%"),
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
});
