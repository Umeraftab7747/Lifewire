import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Item = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.MainContainer}>
      <View style={styles.topImgContainer}>
        <Image
          style={styles.Imgss}
          source={require("../../assets/Images/f1.png")}
        />
      </View>
      <View style={styles.bottomImgContainer}>
        <Text style={styles.BgtxtColor}>Folic Acid vitamin B9</Text>
        <Text style={styles.BgtxtColor}>Rs 3000</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  MainContainer: {
    width: "47%",
    height: h("30%"),
    // backgroundColor: "red",
    borderRadius: h("1%"),
    borderColor: "#0006",
    borderWidth: h("0.3%"),
    alignSelf: "center",
  },
  topImgContainer: {
    width: "100%",
    height: "75%",
    // backgroundColor: "red",
  },
  bottomImgContainer: {
    width: "100%",
    height: "25%",
    backgroundColor: "#5A287F",
    justifyContent: "center",
    alignItems: "center",
  },
  Imgss: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  BgtxtColor: {
    color: "white",
    fontSize: h("2%"),
  },
});
