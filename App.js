import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
// screens
import StackNavigation from "./src/Navigation/StackNavigation";

export default function App() {
  return (
    <>
      <SafeAreaView />
      <StatusBar />
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
