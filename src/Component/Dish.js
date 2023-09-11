import * as React from "react";
import { StyleSheet,Dimensions,View,Text, TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get('window').width;

export default function Dish() {
    return (
        <TouchableOpacity activeOpacity={0.5}>
            <View style={styles.container}>
                <Text style={{color:'red',padding:8}}>Dishessdsdvvsdvsvdvsv </Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width:windowWidth*0.28,
        height:120,
        backgroundColor:'#fff',
        borderRadius:12,
        // padding:10,
        elevation:2,
        marginBottom:4,
        marginRight:7,
    }
})