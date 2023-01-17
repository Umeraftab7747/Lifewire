import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const About = () => {
  return (
    <View style={styles.MainSetting}>
      {/* Header */}
      <View style={styles.headrContainer}>
        <Text style={styles.cartContainer}>About</Text>
      </View>
      {/* Header */}
      <View style={styles.ImgContainer}>
        <Image
          style={{ width: "70%", height: "70%", resizeMode: "contain" }}
          source={require("../../assets/Images/icon7.png")}
        />
      </View>

      <Text style={styles.BText}>
        hsba vsahjvjac ahvcasvja chavsva sahvcshsd hwdhq dwqhvdhjvwq whdvvqw
        xbqwvhdgvq wdbwhvqhdqw dhwvdhjq dhqvchqvwjhvhw dwjbqdbjq dhwdhwvqdq
        dhwvdqvwd whvwqv wdjbqhbw qmwhvdqvd qhdvhwvd hdvwvdwv wjbdjw whdvhw
        dwhvdwh hsba vsahjvjac ahvcasvja chavsva sahvcshsd hwdhq dwqhvdhjvwq
        whdvvqw xbqwvhdgvq wdbwhvqhdqw dhwvdhjq dhqvchqvwjhvhw dwjbqdbjq
        dhwdhwvqdq dhwvdqvwd whvwqv wdjbqhbw qmwhvdqvd qhdvhwvd hdvwvdwv wjbdjw
        whdvhw dwhvdwh hsba vsahjvjac ahvcasvja chavsva sahvcshsd hwdhq
        dwqhvdhjvwq whdvvqw xbqwvhdgvq wdbwhvqhdqw dhwvdhjq dhqvchqvwjhvhw
        dwjbqdbjq dhwdhwvqdq dhwvdqvwd whvwqv wdjbqhbw qmwhvdqvd qhdvhwvd
        hdvwvdwv wjbdjw whdvhw dwhvdwh hsba vsahjvjac ahvcasvja chavsva
        sahvcshsd hwdhq dwqhvdhjvwq whdvvqw xbqwvhdgvq wdbwhvqhdqw dhwvdhjq
        dhqvchqvwjhvhw dwjbqdbjq dhwdhwvqdq
      </Text>
    </View>
  );
};

export default About;

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
  BText: {
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    color: "#0003",
  },
});
