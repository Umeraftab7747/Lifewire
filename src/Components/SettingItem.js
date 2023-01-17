import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";
import Ionicons from "@expo/vector-icons/Ionicons";

const SettingItem = ({ name, img, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.LeftCOntainer}>
        <Image
          style={{ width: "60%", height: "60%", resizeMode: "contain" }}
          source={img}
        />
      </View>
      <View style={styles.rigtCOntainer}>
        <Text style={styles.MainText}>{name}</Text>
      </View>
      <View style={styles.LastCOntainer}>
        <Ionicons name="chevron-forward-outline" size={22} color="#000" />
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  mainContainer: {
    width: "90%",
    height: h("6%"),
    flexDirection: "row",
    // backgroundColor: "red",
  },
  LeftCOntainer: {
    // backgroundColor: "green",
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  rigtCOntainer: {
    width: "70%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  LastCOntainer: {
    width: "15%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
  },
  MainText: {
    color: "#000",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
