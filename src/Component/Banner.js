import * as React from "react";
import { View ,Image, StyleSheet,Dimensions,Text } from "react-native";
const windowWidth = Dimensions.get('window').width;
export default function Banner() {

  return (
      <View style={styles.container}>
          <Image
            style={styles.img}
            source={{uri:'https://thumbs.dreamstime.com/z/calorie-counter-word-concepts-banner-dietary-nutrition-rule-weight-lose-infographics-linear-icons-blue-calorie-counter-183951948.jpg?w=768'}}
          />
      </View>
  );
}
const styles = StyleSheet.create({

  container: {
    padding:15,
    width:windowWidth,
    elevation:30,
  },
  img: {
    borderRadius:7,
    height: 180,
  },
  name: {
    padding: 1,
    fontSize: 18,
    alignSelf:'center',
    color:'black',
    // paddingTop:10,
    fontWeight: 'bold',
  },
  addIcon:{
    alignSelf:'center',
    justifyContent:'center'
  }
});
