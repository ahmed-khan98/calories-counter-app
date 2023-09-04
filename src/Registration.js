import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { InputField } from "./Register";
import { useState } from "react";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Registration({ navigation }) {
  const [userGoal, SetUserGoal] = useState({});

  function handleGoal(e, key) {
    SetUserGoal({
      ...userGoal,
      [key]: e,
    });
  }
  function handleSubmit() {
    // console.log("==>goal", userGoal);
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SafeAreaView>
        <KeyboardAvoidingView>
        <Text style={styles.topheading}>Set up Your profile</Text>
        <View style={styles.inputContainer}>
        <Text style={styles.heading}>What is your curent Height in ft?</Text>
        <InputField
          keyboardType="numeric"
          textContentType="emailAddress"
          placeholder="Enter Your Height in ft"
          placeholderTextColor="grey"
          onChangeText={(e) => handleGoal(e, "height")}
          onFocus
        />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.heading}>What is your curent weight in Kg?</Text>
        <InputField
          keyboardType="numeric"
          textContentType="emailAddress"
          placeholder="Enter Your curent weight in Kg"
          onChangeText={(e) => handleGoal(e, "currentWeight")}
          placeholderTextColor="grey"
        />
        </View>
        <View style={styles.inputContainer}>

        <Text style={styles.heading}>
          How much weight would you like to lose in kg?
        </Text>
        <InputField
          keyboardType="numeric"
          textContentType="emailAddress"
          placeholder="Enter Your Goal weight in kg"
          onChangeText={(e) => handleGoal(e, "goalWeight")}
          placeholderTextColor="grey"
        />
        </View>
        <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Your Age</Text>
        <InputField
          keyboardType="numeric"
          textContentType="emailAddress"
          placeholder="Enter Your Age"
          placeholderTextColor="grey"
          onChangeText={(e) => handleGoal(e, "age")}
        />
        </View>
        <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8b3d',
    width:windowWidth,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:'white'
  },
  topheading: {
    fontSize: 32,
    padding: 20,
    marginTop: 10,
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#ff8b3d",
  },
  inputContainer:{
    marginBottom:7,
  },
  heading: {
    paddingLeft: 5,
    paddingBottom: 8,
  },
  Btn: {
    color: '#ffffff',
    backgroundColor: "#ff8b3d",
    width:windowWidth*0.8,
    padding: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 20,
    elevation:2,
  },
  btntext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
