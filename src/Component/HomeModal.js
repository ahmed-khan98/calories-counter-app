import axios from 'axios';
import React, { useState } from 'react';
import Modal from "react-native-modal";
import Feather  from "react-native-vector-icons/Feather";
import Fontisto  from "react-native-vector-icons/Fontisto";
import storage from '@react-native-firebase/storage';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import { StyleSheet,Dimensions,View,Text,TouchableOpacity,Image ,PermissionsAndroid } from "react-native";

const windowWidth = Dimensions.get('window').width;

export const HomeModal = ({open,setOpen}) => {
  const [photo,setPhoto]=useState()
  const [data,setData]=useState()

  const options={
    saveToPhotos:true,
    mediaType:'photo'
  }
  const openCamera =  async()=>{
    const granted= await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
    console.log("granted---->",granted)
    // const grantedExternal = await PermissionsAndroid.request(
    //   PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //   {
    //     title: 'External Storage Write Permission',
    //     message: 'App needs write permission',
    //   },
    //   );
      // console.log("grantedExternal---->",grantedExternal)
      console.log("PermissionsAndroid.RESULTS.GRANTED---->",PermissionsAndroid.RESULTS.GRANTED)
    if(granted === PermissionsAndroid.RESULTS.GRANTED ){
      // && grantedExternal === PermissionsAndroid.RESULTS.GRANTED ){
      const result = await launchCamera(options)
        console.log(granted, result)
        setPhoto(result.assets[0])
        // uploadImage()
        // setOpen(false)
    } 
  }
  
  const openGallery=async()=>{
    const result=await launchImageLibrary(options)
    setPhoto(result.assets[0])
    // setOpen(false)
  }

  const uploadImage=async()=>{
    console.log('chala--->>>>');
    const reference = storage().ref(photo.fileName);
    const pathToFile = photo.uri;
    
    await reference.putFile(pathToFile);
    const task = reference.putFile(pathToFile);
    
    console.log('task------>>>>', task);
    
    task.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
    });
    
    task.then(async () => {
      console.log('Image uploaded to the bucket!');
      // Get the download URL of the uploaded image
      const url = await reference.getDownloadURL();
      let data = JSON.stringify({
        "image": url
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://6df1-2603-300a-21e3-0-d131-6e3f-46f3-578f.ngrok-free.app/api/model',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        setData(response.data?.data)
        console.log(response.data?.data?.calorie);
        console.log(response.data?.data?.itemName);
        alert(response.data?.data?.calorie )
      })
      .catch((error) => {
        console.log(error);
      });
      console.log('Download URL:', url);
    }).catch(error => {
      console.error('Error uploading image:', error);
    });
}
console.log(data)
  return (
    <Modal isVisible={open} onBackdropPress={()=>{setOpen(false)}} 
    //  onSwipeComplete={() => setOpen(false)}
    //  swipeDirection="top"
    style={styles.modelStyle}
    >
      <View style={styles.modelContainer}>
        {photo?.uri ? 
        <View style={{alignItems:'center',justifyContent:'center' }}>
        <Image
            source={{
              uri:photo?.uri
            }}
            style={{ width: 100, height: 100,borderRadius:8}}
          />
          <TouchableOpacity  style={styles.modalbtn}  onPress={uploadImage}>
          <Text style={styles.modalbtnText}>Find Calories<Feather name='camera' color='#fff' size={20}/></Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={()=>{setPhoto('')}} style={styles.modalbtn}>
          <Text style={styles.modalbtnText}>Back To Snap<Fontisto name='photograph' color='#fff' size={20}/></Text>
        </TouchableOpacity>
        </View>
        :
     <>
     <TouchableOpacity onPress={openCamera} style={styles.modalbtn}>
      <Text style={styles.modalbtnText}>Launch Camera <Feather name='camera' color='#fff' size={20}/></Text>
    </TouchableOpacity>
   
    <TouchableOpacity onPress={openGallery} style={styles.modalbtn}>
      <Text style={styles.modalbtnText}>Launch Gallery <Fontisto name='photograph' color='#fff' size={20}/></Text>
    </TouchableOpacity>
     </>
}
      </View>
    </Modal>

  )
}

const styles=StyleSheet.create({
    modelStyle:{
        justifyContent:'flex-end',
        margin:0,
      },
      modelContainer:{
        backgroundColor:'#fff',
        height:270,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        justifyContent:'center',
        alignItems:'center'
      },
      modalbtn: {
        width: windowWidth*0.8,
        padding: 15,
        backgroundColor: '#01714b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        marginTop:10,
      },
      modalbtnText: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight:'bold',
        color: '#fff',
      },
})
