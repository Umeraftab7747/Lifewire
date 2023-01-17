import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

import CartItem from "../Components/CartItem";
import AppButton from "../Components/AppButton";
import Item from "../Components/Item";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
];

const CollectionScreen = () => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>Collection</Text>
      </View>
      {/* Header */}
      <View style={styles.ImgContainer}>
        <Image
          style={{ width: "70%", height: "70%", resizeMode: "contain" }}
          source={require("../../assets/Images/icon3.png")}
        />
      </View>

      <FlatList
        data={DATA}
        numColumns={2}
        renderItem={({ item }) => (
          <Item
            onPress={() => {
              navigation.navigate("ItemDetail");
            }}
          />
        )}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          justifyContent: "space-evenly",
          marginTop: h("1%"),
        }}
      />
    </View>
  );
};

export default CollectionScreen;

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
  ImgContainer: {
    width: "70%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
