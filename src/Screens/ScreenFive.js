import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import SelectionButton from "../Components/SelectionButton";

const ScreenFive = ({ navigation }) => {
  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            style={styles.MainImg}
            source={require("../../assets/Images/img5.png")}
          />
        </View>
        <Text style={styles.Text3}>
          To use service you need to complete 3 steps!
        </Text>
        <Text style={styles.Text2}>Step 3 : Select topic of your choice</Text>
        <Text style={styles.Text4}>
          Please select the category of support you like to work on. You may
          pick as many as you want for a random mixture or just one!
        </Text>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Depression"} />
          <SelectionButton text={"Anxiety"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Stress"} />
          <SelectionButton text={"Anger management"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Romantic relationship"} />
          <SelectionButton text={"Positive thinking"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Addiction recovery"} />
          <SelectionButton text={"Increasing motivation"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Greif and loss"} />
          <SelectionButton text={"Accepting change"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Developing an attitude"} />
          <SelectionButton text={"Happiness"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Self love & respect"} />
          <SelectionButton text={"Leadership"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Funny"} />
          <SelectionButton text={"Parenting"} />
        </View>
        <View style={styles.MainBtnContainer}>
          <SelectionButton text={"Christian faith"} />
          <SelectionButton text={"Physical fitness"} />
        </View>
        <View style={styles.Space} />
        <View style={styles.BtnContainer}>
          <AppButton
            text={"Next"}
            onPress={() => {
              navigation.navigate("ScreenSix");
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ScreenFive;

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
    resizeMode: "cover",
    marginTop: h("3%"),
  },
  imgContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("40%"),
  },
  Text1: {
    color: "#5A287F",
    fontSize: h("4%"),
    fontWeight: "bold",
    marginTop: h("2%"),
    alignSelf: "center",
  },
  Text2: {
    color: "#000",
    fontSize: h("2.7%"),
    marginTop: h("1%"),
    fontWeight: "bold",
    alignSelf: "center",
  },
  Text3: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("5%"),
    alignSelf: "center",
  },
  Space: {
    marginTop: h("5%"),
  },
  Text4: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("1%"),
  },
  MainBtnContainer: {
    // backgroundColor: "green",
    width: "100%",
    height: h("8%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  BtnContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: h("10%"),
  },
});
