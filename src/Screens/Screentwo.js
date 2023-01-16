import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

// components
import AppButton from "../Components/AppButton";

const Screentwo = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/img2.png")}
        />
      </View>
      <Text style={styles.Text1}>Welcome!</Text>
      <Text style={styles.Text2}>Let’s get you set up for success!</Text>
      <Text style={styles.Text3}>
        This system is designed to send out emails and text messages to users
        who want to receive positive affirmations, encouragements and quotes to
        help motivate themselves to acheive their goals
      </Text>
      <View style={styles.Space} />
      <AppButton
        text={"Get Started"}
        onPress={() => {
          navigation.navigate("Screenthree");
        }}
      />
    </View>
  );
};

export default Screentwo;

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
    resizeMode: "contain",
    marginTop: h("3%"),
  },
  imgContainer: {
    // backgroundColor: "red",
    width: "70%",
    height: h("40%"),
  },
  Text1: {
    color: "#5A287F",
    fontSize: h("4%"),
    fontWeight: "bold",
    marginTop: h("2%"),
  },
  Text2: {
    color: "#000",
    fontSize: h("2%"),
    marginTop: h("1%"),
  },
  Text3: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("5%"),
  },
  Space: {
    marginTop: h("20%"),
  },
});
