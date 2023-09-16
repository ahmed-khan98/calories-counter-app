import { View, Text,StyleSheet,ScrollView,Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import React from 'react'
import HomeHeader from '../Component/HomeHeader';
import Comment from '../Component/Comment';


export default function Feedback ({navigation}){
  return (
    <ScrollView shhowsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <HomeHeader navigation={navigation} name='Feedback' icon={<Icon name="arrow-back" style={styles.menuIcon} size={26} color="#fff" />}/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>
<Comment/>

    </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,     
        backgroundColor: "#f9f9f9f9",
  }
});
