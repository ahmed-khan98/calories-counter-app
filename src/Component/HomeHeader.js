import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function HomeHeader({ navigation,name,icon }) {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        {icon}   
                </TouchableOpacity>
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#01714b",
        // flex: 1,
        paddingBottom: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#01714b",
        paddingTop: 5,
        paddingBottom:5,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
    },
    icon: {
        marginRight: 10,
    },
    iconbag: {
        marginRight: 10,

    },
    name: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 20,
        // fontWeight: 500,
    }
});