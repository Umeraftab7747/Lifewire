import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { w, h } from "react-native-responsiveness";

const FaqItem = ({ text1, text2 }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setOpen(!open);
        }}
        style={styles.Maincontainer}
      >
        <Text style={styles.Question}>{text1}</Text>
      </TouchableOpacity>
      {open && (
        <View style={styles.Answer}>
          <Text style={styles.Question2}>{text2}</Text>
        </View>
      )}
    </>
  );
};

export default FaqItem;

const styles = StyleSheet.create({
  Maincontainer: {
    width: "90%",
    height: h("7%"),
    backgroundColor: "purple",
    justifyContent: "center",
    paddingLeft: h("1%"),
    paddingRight: h("1%"),
    marginTop: h("1%"),
  },
  Answer: {
    // backgroundColor: "green",
    width: "90%",
    height: h("10%"),
    marginBottom: h("1%"),
    paddingLeft: h("1%"),
    paddingRight: h("1%"),
    borderColor: "#5A287F",
    borderWidth: h("0.2%"),
  },
  Question: {
    color: "#fff",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
  Question2: {
    color: "#5A287F",
    fontSize: h("2%"),
    fontWeight: "bold",
  },
});
