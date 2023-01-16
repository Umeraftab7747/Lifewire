import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const Splash = () => {
  return (
    <View style={styles.MAinContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/logo.png")}
        />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  MAinContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5A287F",
  },
  MainImg: {
    // backgroundColor: "white",
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  imgContainer: {
    // backgroundColor: "white",
    width: "100%",
    height: h("50%"),
  },
});
