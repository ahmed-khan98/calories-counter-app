import React from "react";
import { StyleSheet, ScrollView, View,Dimensions,Text } from "react-native";
import Dish from "./Dish";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function Dishes(){
    return(
        <View>
            <View style={styles.breakfastList}>
            <Text style={styles.routineName} showsHorizontalScrollIndicator={false}>Break Fast</Text>
            <ScrollView horizontal={true}>
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
            </ScrollView>
          </View>
          <View style={styles.breakfastList}>
            <Text style={styles.routineName} showsHorizontalScrollIndicator={false}>Lunch</Text>
            <ScrollView horizontal={true}>
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
            </ScrollView>
          </View>
          <View style={styles.breakfastList}>
            <Text style={styles.routineName} showsHorizontalScrollIndicator={false}>Dinner</Text>
            <ScrollView horizontal={true}>
              <Dish />
              <Dish />
              <Dish />
              <Dish />
              <Dish />
            </ScrollView>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    breakfastList: {
        width: windowWidth,
        marginHorizontal:15,
      },
      routineName:{
        color:'#000',
        fontWeight: 'bold',
        fontSize:18,
        marginHorizontal:5,
        marginVertical:5,
    
      },
})