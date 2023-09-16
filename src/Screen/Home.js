import React,{ useState } from "react";
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar,TouchableOpacity ,Image, Dimensions } from "react-native";
import HomeHeader from "../Component/HomeHeader";
import Banner from "../Component/Banner";
import Foods from "../Component/Food";
import Dishes from "../Component/Dishes";
import { UserCalories } from "../Component/UserCalories";
import { HomeModal } from "../Component/HomeModal";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Home({ navigation }) {
  const [open,setOpen]=useState(false)
  const handleOpen=()=>{
    setOpen(true)
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar animated={true} style={'dark'} />
        <SafeAreaView>
          <HomeHeader navigation={navigation} name='Home' icon={<Icon name="menu-sharp" style={styles.menuIcon} size={26} color="#fff"/>} />
           <UserCalories/>
          
          <Banner />
          <Foods handleOpen={handleOpen} navigation={navigation}/>
          <Dishes/>
          

        </SafeAreaView>
      </View>
    <HomeModal open={open} setOpen={setOpen}/>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    backgroundColor: '#ffffff',
    // backgroundColor:'#FEFCFF',
  },
});
