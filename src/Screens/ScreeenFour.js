import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";

const ScreeenFour = ({ navigation }) => {
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Dark", value: "Dark" },
    { label: "Blue", value: "Blue" },
    { label: "Light", value: "Light" },
    { label: "Pink", value: "Pink" },
  ]);
  return (
    <View style={styles.MainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.MainImg}
          source={require("../../assets/Images/img4.png")}
        />
      </View>
      <Text style={styles.Text3}>
        To use service you need to complete 3 steps!
      </Text>
      <Text style={styles.Text2}>Step 2 : Select background theme</Text>
      <DropDownPicker
        style={{
          width: "90%",
          alignSelf: "center",
          borderColor: "#0003",
          borderWidth: h("0.1%"),
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
          navigation.navigate("ScreenFive");
        }}
      />
    </View>
  );
};

export default ScreeenFour;

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
  },
  Text3: {
    color: "#0005",
    fontSize: h("2%"),
    paddingLeft: h("3%"),
    paddingRight: h("3%"),
    marginTop: h("5%"),
  },
  Space: {
    marginTop: h("28%"),
  },
});
