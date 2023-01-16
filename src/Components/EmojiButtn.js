import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const EmojiButtn = () => {
  return (
    <View style={styles.EmojiButton}>
      <View style={styles.TOpOntainer}>
        <Image
          style={styles.Img1}
          source={require("../../assets/Images/sm1.png")}
        />
      </View>
      <Text>Awesome</Text>
    </View>
  );
};

export default EmojiButtn;

const styles = StyleSheet.create({
  EmojiButton: {
    // backgroundColor: "#000",
    width: 90,
    height: 90,
    borderRadius: h("1%"),
    borderWidth: h("0.3%"),
    borderColor: "#0003",
    // justifyContent: "center",
    alignItems: "center",
  },
  TOpOntainer: {
    width: "100%",
    height: "70%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  Img1: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
});
