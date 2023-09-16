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
import DropDownPicker from 'react-native-dropdown-picker';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Registration({ navigation }) {
  const [userGoal, SetUserGoal] = useState({});
  const [activity, setActivity] = useState(null);
  const [gender, setGender] = useState(null);
  const [goal, setGoal] = useState(null);
  const [open, setOpen] = useState(false);
  const [openGender, setOpenGender] = useState(false);
  const [openGoal, setOpenGoal] = useState(false);
  const Activitylist= [
    {label: 'Sedentary', value: '1.2'},
    {label: 'lightly Active', value: '1.375'},
    {label: 'Moderately Active', value: '1.55'},
    {label: 'Very Active', value: '1.725'},
    {label: 'Extremely Active', value: '1.9'},
  ]
  const goallist=[
    {label: 'Gain Weight', value: 'gain'},
    {label: 'Lose Weight', value: 'lose'}
  ]
  const genderlist=[
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]

  function handleGoal(e, key) {
    SetUserGoal({
      ...userGoal,
      [key]: e,
    });
  }

  function handleSubmit() {
    const { age, currentWeight, kgToGainLose, height, months } = userGoal;

    let bmr;
    if (parseFloat(currentWeight) < 30 && goal === 'lose') {
      alert('Your weight is too low. Consult a healthcare professional.');
      return;
    }
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * currentWeight + 4.799 * height - 5.677 * age;
    } else{
      bmr = 447.593 + 9.247 * currentWeight + 3.098 * height - 4.33 * age;
    }

    const tdee = bmr * activity;
    const dailyCalories = Math.round(tdee);
    const goalMultiplier = goal === 'lose' ? -1 : 1;
    const totalGoalCalories = goalMultiplier * 3500 * months;
    const adjustedDailyCalories = dailyCalories + Math.round(totalGoalCalories / (months * 30));
  
    alert(adjustedDailyCalories);
    navigation.navigate('Home');
  
  }
  
  return (
<ScrollView shhowsVerticalScrollIndicator={false}>
    <View style={styles.container}>
{/* <KeyboardAvoidingView> */}
        <Text style={styles.topheading}>Set up Your profile</Text>
        <DropDownPicker
      open={open}
      items={Activitylist}
      setOpen={()=>setOpen(!open)}
      value={activity}
      setValue={(e)=>setActivity(e)}
      placeholder="Select Your Activity Level"
      disableBorderRadius={false}
      style={{ borderColor: '#01714b' }}
      placeholderStyle={{color:'#01714b',fontWeight:'bold'}}
      containerStyle={{ width: windowWidth * 0.8,marginBottom:7 }}
      zIndex={5000}
      />
       <DropDownPicker
        open={openGender}
      items={genderlist}
      setOpen={()=>setOpenGender(!openGender)}
      value={gender}
      setValue={(e)=>setGender(e)}
      placeholder="Select Your Gender"
      disableBorderRadius={false}
      style={{ borderColor: '#01714b' }}
      placeholderStyle={{color:'#01714b',fontWeight:'bold'}}
      containerStyle={{ width: windowWidth * 0.8,marginBottom:7 }}
      zIndex={4000}
      />
      <DropDownPicker
      open={openGoal}
      items={goallist}
      setOpen={()=>setOpenGoal(!openGoal)}
      value={goal}
      setValue={(e)=>setGoal(e)}
      placeholder="Select Your Goal"
      disableBorderRadius={false}
      style={{ borderColor: '#01714b' }}
      placeholderStyle={{color:'#01714b',fontWeight:'bold'}}
      containerStyle={{ width: windowWidth * 0.8,marginBottom:7 }}
      zIndex={3000}
      />
        <View style={styles.inputContainer}>
        <Text style={styles.heading}>What is your curent Height in cm?</Text>
        <InputField
          keyboardType="numeric"
          textContentType="givenName"
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
          textContentType="givenName"
          placeholder="Enter Your curent weight in Kg"
          onChangeText={(e) => handleGoal(e, "currentWeight")}
          placeholderTextColor="grey"
        />
        </View>
        <View style={styles.inputContainer}>

        <Text style={styles.heading}>
          How much weight would you like to Lose/Gain in kg?
        </Text>
        <InputField
          keyboardType="numeric"
          textContentType="givenName"
          placeholder="Enter Your Goal weight in kg"
          onChangeText={(e) => handleGoal(e, "kgToGainLose")}
          placeholderTextColor="grey"
        />
        </View>
        <View style={styles.inputContainer}>

<Text style={styles.heading}>
How much No. of month?

</Text>
<InputField
  keyboardType="numeric"
  textContentType="givenName"
  placeholder="Number of Months"
  onChangeText={(e) => handleGoal(e, "months")}
  placeholderTextColor="grey"
/>
         </View>
        <View style={styles.inputContainer}>
        <Text style={styles.heading}>Enter Your Age</Text>
        <InputField
          keyboardType="numeric"
          textContentType="givenName"
          placeholder="Enter Your Age"
          placeholderTextColor="grey"
          onChangeText={(e) => handleGoal(e, "age")}
        />
        </View>
        <TouchableOpacity style={styles.Btn} onPress={handleSubmit}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity>
        {/* </KeyboardAvoidingView> */}
    </View>
  </ScrollView>       
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:windowWidth,
    backgroundColor: '#ffff',
    alignItems: "center",
    justifyContent: "center",
  },
 
  topheading: {
    fontSize: 32,
    padding: 20,
    marginTop: 5,
    marginBottom: 0,
    textAlign: "center",
    fontWeight: "bold",
    color: "#01714b",
  },
  inputContainer:{
    marginBottom:7,
  },
  heading: {
    paddingLeft: 5,
    paddingBottom: 5,
    fontSize:12,
    color:'#01714b'
  },
  Btn: {
    color: '#ffffff',
    backgroundColor: "#01714b",
    width:windowWidth*0.8,
    padding: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 10,
    marginBottom: 20,
    elevation:2,
  },
  btntext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
