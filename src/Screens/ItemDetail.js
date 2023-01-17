import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppButton from "../Components/AppButton";

const ItemDetail = () => {
  return (
    <View style={styles.Maincontainer}>
      <View style={styles.ImgBg}>
        <Image
          style={styles.Img}
          source={require("../../assets/Images/f1.png")}
        />
      </View>
      <View style={styles.TopC}>
        <Text style={styles.Colf}>Folic acid vitamin B9</Text>
        <Text style={styles.Colf}>Rs 3000</Text>
      </View>
      <View style={styles.TopC2}>
        <Ionicons name="star" size={22} color="#5A287F" />
        <Ionicons name="star" size={22} color="#5A287F" />
        <Ionicons name="star" size={22} color="#5A287F" />
        <Ionicons name="star" size={22} color="#5A287F" />
      </View>
      <Text style={styles.TxtDscp}>
        dhgfyhg cjhdhjvas dhjavchjavc jhcvhvcha chsv csbcvhjdc ajhvchvdc
        hjvdfhjev djcvjdhc qjhvhcv gvdge cqahdhjacd wqdfywqdq dqwydqgw xaGF
        SBQJahsdkuh feiwhfuieh whfuehwfiuw wucgwg cvjwebjvkbwkvbew vjbvbwvejv
        vkjbjkdsbkceubc wbcjbwbc wjbcjweb ajjsgggsbshd jjje udyyej hjh wnsdkjqd
        ejjeje jdjjdj ekuhkwhe
      </Text>

      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.Btncc}>
          <Ionicons name="cart" size={22} color="#fff" />
        </TouchableOpacity>
        <AppButton
          text={"Continue"}
          onPress={() => {
            alert("Added to cart");
          }}
        />
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  ImgBg: {
    // backgroundColor: "red",
    width: "100%",
    height: h("40%"),
    borderBottomColor: "#0003",
    borderBottomWidth: h("0.3%"),
  },
  Img: {
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
    resizeMode: "contain",
  },
  TopC: {
    // backgroundColor: "red",
    width: "90%",
    height: h("7%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: h("1%"),
  },
  TopC2: {
    // backgroundColor: "red",
    width: "90%",
    height: h("7%"),
    flexDirection: "row",
    // justifyContent: "space-evenly",
    // alignItems: "center",
  },
  Colf: {
    color: "#5A287F",
    fontSize: h("2.3%"),
    fontWeight: "bold",
  },
  TxtDscp: {
    color: "#0008",
    fontSize: h("2%"),
    paddingLeft: h("2%"),
    paddingRight: h("2%"),
  },
  BtnContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: h("2%"),
    flexDirection: "row",
    // backgroundColor: "red",
  },
  Btncc: {
    backgroundColor: "#5A287F",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: h("1%"),
  },
});
