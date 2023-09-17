import { View, Text,TextInput, StyleSheet, ScrollView ,TouchableOpacity,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from "react-native-vector-icons/Feather";
import React, { useState } from "react";
import Modal from "react-native-modal";
import HomeHeader from '../Component/HomeHeader';
import Comment from '../Component/Comment';
const windowWidth = Dimensions.get('window').width;


export default function Feedback({ navigation }) {

  const [open, setOpen] = useState(false)
  const handleSubmit = (e) => {
    console.log(e)
    setOpen(true)
  }

  return (
    <ScrollView shhowsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <HomeHeader
          navigation={navigation}
          name='Feedback'
          icon={<Icon name="arrow-back" size={26} color="#fff" />}
          editIcon={
            <TouchableOpacity onPress={()=>handleSubmit()}>
              <Feather name="edit" size={26} color="#fff" />
            </TouchableOpacity>}
        />

        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </View>
      <Modal isVisible={open} onBackdropPress={() => { setOpen(false) }} style={styles.modelStyle} animationIn='fancy'>
        <View style={styles.modelContainer}>

        <TextInput
        style={styles.input}
        multiline={true}
        placeholder='enter your feedback here'
      />
          <TouchableOpacity style={styles.addbtn} onPress={()=>setOpen(false)}>
            <Text style={styles.addbtnText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </Modal>
    </ScrollView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9f9",
  },
  modelStyle: {
    justifyContent: 'center',
    margin: 30,
  },
  modelContainer: {
    backgroundColor: '#fff',
    paddingHorizontal:25,
    paddingVertical:30,
    borderRadius: 20,
    justifyContent: 'space-around',
  },
  input: {
    height: 150,
    paddingLeft:10,
    borderRadius:10,
    // paddingTop:20,
    fontSize:18,
    backgroundColor: '#e6f1ed',
    color:'#8e8e8e'
  },
  addbtn: {
    paddingHorizontal: 20,
    padding: 10,
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
});
