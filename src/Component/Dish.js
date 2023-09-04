import * as React from "react";
import { StyleSheet,Dimensions,View,Text, TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get('window').width;

export default function Dish() {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text>Dishes</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width:windowWidth*0.26,
        height:120,
        backgroundColor:'#fff',
        borderRadius:15,
        padding:10,
        elevation:1,
        margin:5,
    }
})