import React, { useState } from "react";
import Modal from "react-native-modal";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import { StyleSheet, Dimensions, View, Text, Image, TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get('window').width;

export default function Dish({ name, calories, quantity, image }) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(false)
    const handleSubmit = (e) => {
        console.log(e)
        setData(e)
        setOpen(true)
    }
    return (
        <>
            <TouchableOpacity activeOpacity={0.5} onPress={() => handleSubmit({ name, calories, image })}>
                <View style={styles.container}>
                    <Image
                        style={styles.img}
                        resizeMode="cover"
                        source={{ uri: image }}
                    />
                    <Text style={styles.dishname}>{name}</Text>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <Text style={styles.dishcaloires}>{calories}</Text>
                </View>
            </TouchableOpacity>
            <Modal isVisible={open} onBackdropPress={() => { setOpen(false) }} style={styles.modelStyle}>
                <View style={styles.modelContainer}>

                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={{
                                uri: data?.image
                            }}
                            style={{ width: 100, height: 100, borderRadius: 8 }}
                        />
                    </View>
                    <View style={{ marginLeft: 30, marginRight: 30 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.itemKey}>Name</Text>
                            <Text style={styles.itemName}>{data?.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.itemKey}>Calories</Text>
                            <Text style={styles.itemName}>{data?.calories}</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 }}>
                        <TouchableOpacity style={styles.cancelbtn} onPress={() => { setOpen(false) }}>
                            <Text style={styles.cancelbtnText}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.addbtn}>
                            <Text style={styles.addbtnText}>Add To Diet</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth * 0.28,
        // height:150,
        backgroundColor: '#e6f1ed',
        borderRadius: 8,
        elevation: 4,
        marginBottom: 14,
        marginRight: 7,
    },
    img: {
        borderRadius: 3,
        width: '100%',
        height: 90,
    },
    dishname: {
        paddingHorizontal: 5,
        paddingTop: 2,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
    },
    dishcaloires: {
        paddingHorizontal: 5,
        // paddingTop:1,
        paddingBottom: 1,
        color: '#01714b',
        fontWeight: 'bold',
        fontSize: 13,
    },
    quantity: {
        fontSize: 12,
        paddingHorizontal: 5,
        paddingBottom: 1,
        color: 'grey'
    },
    modelStyle: {
        justifyContent: 'center',
        margin: 30,
    },
    modelContainer: {
        backgroundColor: '#fff',
        height: 290,
        borderRadius: 20,
        justifyContent: 'space-around',
        // alignItems:'center'
    },
    addbtn: {
        paddingHorizontal: 20,
        padding: 10,
        marginHorizontal: 10,
        backgroundColor: '#01714b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 10,
        elevation: 5,
    },
    addbtnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    cancelbtn: {
        padding: 10,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        backgroundColor: '#e6f1ed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 10,
        elevation: 3,
    },
    cancelbtnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#01714b',
    },
    itemKey: {
        marginTop: 1,
        color: 'grey',
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    itemName: {
        marginTop: 1,
        color: '#01714b',
        fontWeight: 'bold'
    }
})
