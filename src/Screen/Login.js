import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,Dimensions
} from "react-native";
import { InputField, Button } from "./Register";

import { useState } from "react";
import { login } from "../Config/Firebase";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login({ navigation }) {
  const [loginUser, SetLoginUser] = useState({});
  const [loading, setLoading] = useState(false);
console.log(navigation)

  function createUser(e, key) {
    SetLoginUser({
      ...loginUser,
      [key]: e,
    });
  }
  async function SignIn() {
    // console.log("click hoa");
    // try {
    //   setLoading(true);
    //     // const result = await login(loginUser);
    //   alert("user login successfully");
    //   setLoading(false);
      navigation.navigate("Registration");
    // } catch (e) {
    //   alert(e);
    //   setLoading(false);
    // }
  }
 

  return (
    <View style={styles.container}>
      {/* <ScrollView s/howsVerticalScrollIndicator={false}> */}

        <Text style={styles.heading}>LOGIN</Text>
        <View>

        <InputField
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholder="Enter Your Email"
          placeholderTextColor="grey"
          onChangeText={(e) => createUser(e, "email")}
        />
        </View>

        <InputField
          secureTextEntry={true}
          keyboardType="password"
          textContentType="password"
          placeholder="Enter Your Password"
          placeholderTextColor="grey"
          onChangeText={(e) => createUser(e, "password")}
        />

        <TouchableOpacity style={styles.Btn} activeOpacity={0.5}
        onPress={SignIn}>
            <Text style={styles.btntext}>LOG IN</Text>
        </TouchableOpacity>
     
        <View style={styles.auth}>
        <TouchableOpacity 
        //  onPress={() => navigation.navigate("Signup")}
         >
            <Text
              style={styles.forget}
            >Forget Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
         onPress={() => navigation.navigate("Register")}
         >
            <Text
              style={styles.signup}
            >Signup</Text>
          </TouchableOpacity>
        
        </View>
      {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width:windowWidth,
    flex: 1,
    backgroundColor: '#fafafa',
    justifyContent:'center',
    alignItems:'center',
  },
  heading: {
    // color: "#ff8b3d",
    color: "#01714b",
    fontSize: 46,
    fontWeight:'bold',
    marginBottom:40,
    // marginTop: 150,
    // marginBottom: 50,
    textAlign: "center",
  },
  loading: {
    width: 300,
    height: 200,
  },
  Btn: {
    color: '#fafafa',
    backgroundColor: "#01714b",
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
    color: '#fafafa',
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  auth:{
    width:windowWidth*0.8,
    marginTop:20,
    padding:10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  forget:{
    color: "#555",
    // marginTop: 35,
    // marginBottom: 10,
    // alignSelf:'center',
    fontWeight:"bold", 
  },
  signup:{
    color: "#01714b",
    // marginTop: 35,
    // marginBottom: 10,
    // alignSelf:'center',
    fontWeight:"bold",
    
  }
});