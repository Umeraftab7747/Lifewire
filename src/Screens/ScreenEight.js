import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { w, h } from "react-native-responsiveness";
import DropDownPicker from "react-native-dropdown-picker";
import Ionicons from "@expo/vector-icons/Ionicons";

// components
import AppButton from "../Components/AppButton";
import AppInput from "../Components/AppInput";
import SelectionButton from "../Components/SelectionButton";

const ScreenEight = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.MainContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.MainImg}
            source={require("../../assets/Images/img8.png")}
          />
        </View>
        <View style={styles.lowerContainer}>
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Enjoy your first 3 days, it’s free
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Inspire yourself to stay on track and make positive changes in
                your life
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Customized themes to please your eyes
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Quality quotes hand picked by professional mental health
                therapists, and life coaches
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Only $1.49 a month, billed Annually
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>
                Unlock all quotes and categories for unlimited access for only
                $2.99 a month, billed Annually
              </Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>Over 365 quotes for each topic.</Text>
            </View>
          </View>
          {/* lower Contaienr */}
          {/* lower Contaienr */}
          <View style={styles.leftContainer}>
            <View style={styles.IconContainer}>
              <Ionicons name="md-checkmark-circle" size={32} color="black" />
            </View>
            <View style={styles.TextContainer}>
              <Text style={styles.TextCc}>Create your own collections</Text>
            </View>
          </View>

          {/* btn1 */}
          <TouchableOpacity style={styles.Btn1Container}>
            <Text style={styles.BtnTTxt}>
              Yes, sign me up for just $1.49 a month so I can receive daily
              inspiration!
            </Text>
          </TouchableOpacity>
          {/* btn1 */}
          {/* btn1 */}
          <TouchableOpacity style={styles.Btn1Container}>
            <Text style={styles.BtnTTxt}>
              Unlock all quotes, ad free for unlimited & instant viewing, only
              $2.99 a month, billed annually.
            </Text>
          </TouchableOpacity>
          {/* btn1 */}

          <View style={styles.BtnContainer}>
            <AppButton
              text={"Continue"}
              onPress={() => {
                navigation.navigate("ScreenSix");
              }}
            />
          </View>
          {/* lower Contaienr */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ScreenEight;

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
  lowerContainer: {
    // backgroundColor: "red",
    width: "100%",
    height: h("100%"),
    marginTop: h("3%"),
  },
  leftContainer: {
    height: h("5%"),
    alignItems: "center",
    width: "90%",
    // backgroundColor: "green",
    alignSelf: "center",
    flexDirection: "row",
    marginTop: h("2%"),
  },
  IconContainer: {
    width: "20%",
    height: "100%",
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  TextContainer: {
    width: "80%",
    height: "100%",
    // backgroundColor: "blue",
    justifyContent: "center",
    // alignItems: "center",
  },
  TextCc: {
    color: "#000",
    fontSize: h("2%"),
  },
  BtnContainer: {
    width: "100%",
    height: h("10%"),
    justifyContent: "center",
    alignItems: "center",
    marginTop: h("2%"),
  },
  Btn1Container: {
    width: "90%",
    height: h("10%"),
    // backgroundColor: "#5A287F",
    alignSelf: "center",
    marginTop: h("1%"),
    borderRadius: h("1%"),
    borderWidth: h("0.2%"),
    borderColor: "#5A287F",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnTTxt: {
    color: "#5A287F",
    fontSize: h("2%"),
  },
});
