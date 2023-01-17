import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";

const Cart = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>CART</Text>
      </View>
      {/* Header */}
      <CartItem />
      <CartItem />
      <CartItem />

      <View style={styles.TotalContaienr}>
        <Text style={styles.TotText}>Total</Text>
        <Text style={styles.TotText2}>Rs 5500</Text>
      </View>

      <AppButton text={"Pay now"} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "center",
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
  TotalContaienr: {
    // backgroundColor: "red",
    width: "90%",
    height: h("10%"),
    marginTop: h("1%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TotText: {
    color: "#0008",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
  TotText2: {
    color: "#5A287F",
    fontSize: h("2.5%"),
    fontWeight: "bold",
  },
});
