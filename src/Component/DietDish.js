import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
export default function (){
  return (
    <View style={styles.body}>
  <View style={{flexDirection:'row'}}>
  <Image
   style={styles.img}
   source={{ uri: 'https://img.freepik.com/premium-photo/cold-coffee-generated-by-ai_793210-2075.jpg?w=740' }}
 />
  
   <View style={styles.dishInfo}>
   <Text style={styles.dishname}>Black Cold Coffee</Text>
   <Text style={styles.quantity}>1 cup </Text>
   </View>
  </View>
   <View style={{justifyContent:'space-between'}}>
   <Text style={styles.dishcaloires}>109</Text>
   <Text style={styles.dishtime}>3:13 pm</Text>
   <Text style={styles.dishtime}>20/12/2023</Text>
   </View>
     </View>    
  );
}
const styles = StyleSheet.create({
    body: {

        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        justifyContent:'space-between',
        borderRadius: 6,
        marginHorizontal:6,
        marginTop:5,
        marginBottom:2,
        // elevation: 1,
      },
      img: {
        borderRadius: 3,
        width: 70,
        height: 70,
        // borderRadius:50,
      },
      dishname: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
      },
      dishcaloires: {
        alignSelf:'flex-end',
        color: '#01714b',
        fontWeight: 'bold',
        fontSize: 18,
    },
      dishtime: {
        alignSelf:'flex-end',
        fontSize: 13,
        color: 'grey'
    },
      quantity: {
        fontSize: 15,
        color: 'grey'
    },
      dishInfo:{
        marginLeft:10,
      },
      message: {
        fontSize: 13, 
        color: '#555',
      },
})
