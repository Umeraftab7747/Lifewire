import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// screens
import StackNavigation from "./src/Navigation/StackNavigation";

export default function App() {
  return (
    <>
      <StackNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
