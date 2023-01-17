import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";

const Screenthree = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/img3.png")}
        />
      </View>
      <Text style={styles.Text3}>
        To use service you need to complete 3 steps!
      </Text>
      <Text style={styles.Text2}>Step 1 : Registration</Text>
      <AppInput MainText={"What is your name?"} Placeholder={"Your Name ?"} />
      <AppInput
        MainText={"What is your phone number?"}
        Placeholder={"Your Phone Number ?"}
      />
      <AppInput MainText={"What is your Email?"} Placeholder={"Your Email ?"} />

      <View style={styles.Space} />
      <AppButton
        text={"Next"}
        onPress={() => {
          navigation.navigate("ScreeenFour");
        }}
      />
    </View>
  );
};

export default Screenthree;

const styles = StyleSheet.create({
  MainContainer: {
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  MainImg: {
    // backgroundColor: "green",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    marginTop: h("3%"),
  },
  imgContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("35%"),
  },
  Text1: {
    color: "#5A287F",
    fontSize: h("4%"),
    fontWeight: "bold",
    marginTop: h("2%"),
  },
  Text2: {
    color: "#000",
    fontSize: h("2.7%"),
    marginTop: h("1%"),
    fontWeight: "bold",
  },
  Text3: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("5%"),
  },
  Space: {
    marginTop: h("5%"),
  },
});
