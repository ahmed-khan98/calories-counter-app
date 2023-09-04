import * as React from 'react';
import { useState } from 'react';
import {
  StyleSheet, StatusBar, Text, View,
  TouchableOpacity, TextInput, Image, ScrollView,
  SafeAreaView, Alert, KeyboardAvoidingView,Dimensions
} from 'react-native';
// import { Register } from "../Config/Firebase";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Register({ navigation }) {
  const [user, SetUser] = useState({});
  const [loading, setLoading] = useState(false)

  function createUser(e, key) {
    SetUser({
      ...user,
      [key]: e
    })
  }
  async function SignUp() {
     navigation.navigate("Login")
    // try {
    //   setLoading(true)
    // //  const result = await SignUp(user)
    //   alert('user SignUp successfully')
    //   setLoading(false)
    //   navigation.navigate("Login")
    // }
    // catch (e) {
    //   alert(e)
    //   setLoading(false)
    // }
  }

  if (loading) {
    return (
      <View style={styles.loading}>
        <Image style={{ width: 300, height: 300 }}
          source={{
            uri: 'https://media0.giphy.com/media/MXipXbZAykM5eTbhez/200w.gif?cid=82a1493b4eioocgl2pl9mc16kfw9fk1z9bk2970hwwdhlhxd&rid=200w.gif&ct=g'
          }} />
      </View>
    )
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
    <StatusBar style="light" />
    <ScrollView>
      <View style={styles.container}>

      <View style={styles.top}>
      <Text style={styles.heading} >Sign Up</Text>

      </View>
      <View style={styles.bottom}>
      <InputField keyboardType='default'
          textContentType='givenName'
          placeholder="Enter Your Name"
          placeholderTextColor='grey'
          onChangeText={(e) => createUser(e, 'name')} />
          
        <InputField keyboardType='email-address'
          textContentType='emailAddress'
          placeholder="Enter Your Email"
          placeholderTextColor='grey'
          onChangeText={(e) => createUser(e, 'email')} />

        <InputField secureTextEntry={true}
          keyboardType='password'
          textContentType='password'
          placeholder="Enter Your Password"
          placeholderTextColor='grey'
          onChangeText={(e) => createUser(e,'password')} />

        <TouchableOpacity style={styles.Btn}
          onPress={SignUp}
          >
          {loading ?
            <img src='https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator.gif' width='30' height='20' />
            : <Text style={styles.btntext}>SIGN UP</Text>}
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={styles.already}
            >I have already account !</Text>
          </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  </KeyboardAvoidingView>

  );
}
export function InputField({ keyboardType, placeholder, placeholderTextColor, onChangeText, textContentType, secureTextEntry }) {

  return (
    <TextInput style={styles.input}
      // autoFocus
      keyboardType={keyboardType}
      textContentType={textContentType}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry} />
  )
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
    height:windowHeight,
    flex: 1,
    backgroundColor: '#ff8b3d',
    display:'flex',
    alignItems:'center',
    // justifyContent:'center'
  },
  top:{
    flex:1,
    justifyContent:'center'    
  },
  bottom:{
    flex:2,
    backgroundColor:'#ffffff',
    width:windowWidth,
    justifyContent:'center',
    alignItems:'center',
    elevation:20,
    // shadowColor:'red',.
    borderTopLeftRadius: 85,
    borderTopRightRadius: 85,
  },
  Logo: {
    marginTop: 50,
    width: 350,
    height: 130,
  },
  heading: {
    color: "#ffffff",
    fontSize: 48,
    fontWeight:'bold',
    // alignItems:'center',
    // justifyContent:'center'
    // marginTop: 100,
    // marginBottom: 20,
  },
  input: {
    width:windowWidth*0.8,
    height: 50,
    // margin: 7,
    marginBottom:10,
    paddingLeft:15,
    borderRadius:10,
    backgroundColor: '#f9f9f9',
    // borderWidth: 1,
    // borderColor:'#8e8e8e',
    color:'#8e8e8e'
  },
  Btn: {
    color: '#ff8b3d',
    backgroundColor: "#ffffff",
    width:windowWidth*0.8,
    padding: 15,
    borderRadius:10,
    marginTop: 20,
    elevation:2,

  },
  btntext: {
    color: '#ff8b3d',
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
  },
  already:{
    color: "blue",
    marginTop:30,
    borderBottomWidth: 0.5,
    marginBottom: 10,
    borderBottomColor: 'blue',
  }
});
