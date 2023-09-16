import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
export default function Comment(){
  return (
    <View style={styles.body}>
   <Image
   style={styles.img}
   source={{ uri: 'https://avatars.githubusercontent.com/u/11738465?v=4' }}
 />
  
   <View style={styles.userInfo}>
   <Text style={styles.name}>Ahmed khan</Text>
   <Text style={styles.message}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s tandard dummy ext of the printing and typesetting industry. Lorem Ipsum has been the industry's s tandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen b text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
   </View>
     </View>
  );
}
const styles = StyleSheet.create({
    body: {
        padding: 5,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        borderRadius: 6,
        marginHorizontal:6,
        marginTop:5,
        marginBottom:2,
        elevation: 2,
      },
      img: {
        borderRadius: 3,
        width: 50,
        height: 50,
        borderRadius:50,
      },
      name: {
        fontSize: 16,
        color: '#555',
        fontWeight: 'bold',
      },
      userInfo:{
        marginLeft:5,
        width:'85%'
      },
      message: {
        fontSize: 13,
        color: '#555',
      },
})
