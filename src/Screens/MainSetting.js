import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MainSetting = ({ navigation }) => {
  return (
    <View style={styles.MainSetting}>
      <Text>MainSetting</Text>
    </View>
  );
};

export default MainSetting;

const styles = StyleSheet.create({
  MainSetting: {
    backgroundColor: "red",
    flex: 1,
  },
});
