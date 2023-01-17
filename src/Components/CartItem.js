import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const CartItem = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={styles.imgc}
          source={require("../../assets/Images/iggg.png")}
        />
      </View>
      <View style={styles.MiddleContainer}>
        <View>
          <Text style={styles.Htxt}>Eye liner</Text>
          <Text style={styles.Btxt}>Makeup</Text>
        </View>
        <View>
          <Text style={styles.Htxt}>5,000 Rs</Text>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#5A287F",
    width: "90%",
    height: h("15%"),
    marginTop: h("2%"),
    borderRadius: h("1%"),
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: h("1%"),
  },
  leftContainer: {
    backgroundColor: "white",
    width: "30%",
    height: "90%",
    borderRadius: h("1%"),
  },
  MiddleContainer: {
    // backgroundColor: "white",
    width: "40%",
    height: "90%",
    justifyContent: "space-between",
    paddingLeft: h("1%"),
    paddingBottom: h("1%"),
    paddingTop: h("1%"),
  },
  imgc: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Htxt: {
    color: "#fff",
    fontSize: h("2.2%"),
    fontWeight: "bold",
  },
  Btxt: {
    color: "#fff",
    fontSize: h("2%"),
  },
});
