import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import Reminder from "../Components/Reminder";

const ScreenSix = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ]);
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/img6.png")}
        />
      </View>
      <Text style={styles.Text2}>Set daily motivation reminders.</Text>
      <View style={styles.Space2} />
      <Reminder />
      <DropDownPicker
        placeholder="Select days on which you want reminder"
        style={{
          width: "90%",
          alignSelf: "center",
          borderColor: "#0006",
          borderWidth: h("0.2%"),
          marginTop: h("1%"),
        }}
        dropDownContainerStyle={{
          width: "90%",
          alignSelf: "center",
        }}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />

      <View style={styles.Space} />
      <AppButton
        text={"Next"}
        onPress={() => {
          navigation.navigate("Screenseven");
        }}
      />
    </View>
  );
};

export default ScreenSix;

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
  },
  Text2: {
    color: "#000",
    fontSize: h("2.7%"),
    marginTop: h("1%"),
    fontWeight: "bold",
    marginTop: h("5%"),
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
  Space2: {
    marginTop: h("5%"),
  },
});
