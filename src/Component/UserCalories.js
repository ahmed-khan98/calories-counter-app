import * as React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet,Dimensions,View,Text,  } from "react-native";
const windowWidth = Dimensions.get('window').width;

export const UserCalories = () => {
  return (
    <View style={styles.calories}>
    <Icon name="stats-chart-outline" style={styles.menuIcon} size={80} color="#ff8b3d" />
    <View>
    <View style={styles.caloriesInfo}>
      <Text style={styles.caloriesHeading}>Calories Required</Text>
      <Text style={styles.caloriesQty}> 2500</Text>
    </View>
    <View style={styles.caloriesInfo}>
      <Text style={styles.caloriesHeading}>Calories Consume</Text>
      <Text style={styles.caloriesQty}>1150</Text>
    </View>
    <View style={styles.caloriesInfo}>
      <Text style={styles.caloriesHeading}>Calories Remaining</Text>
      <Text style={styles.caloriesQty}>1350</Text>
    </View>
    </View>
  </View>

  )
}

const styles=StyleSheet.create({
    calories: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "white",
        cursor: "pointer",
        // borderColor:"#ff8b3d",
        // borderWidth:1,
        margin: 15,
        marginTop: 20,
        borderRadius: 3,
        elevation: 5,
        // shadowColor: '#52006A',
      },
      caloriesInfo: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      caloriesQty: {
        paddingLeft: 10,
        fontWeight: 'bold'
      },
})
