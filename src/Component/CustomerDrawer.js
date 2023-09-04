import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TouchableOpacity,
  } from "react-native";
  import {
    DrawerContentScrollView,
    DrawerItemList,
  } from "@react-navigation/drawer";
import Icon  from "react-native-vector-icons/Ionicons";
import MaterialIcons  from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
  
  const CustomDrawer = (props) => {
    return (
      <View style={styles.container}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: "#ff8b3d" }}
        >
          <View
            style={{
              paddingLeft: 20,
              alignItems:'flex-start',
              justifyContent:'space-around',
              height: 200,
              // paddingTop: 40,
            }}
          >
            <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize:18,
                  }}
                >Hi, Ahmed</Text>
              <TouchableOpacity
  
                style={{
                  alignItems:'flex-start'
                }}
              >
                <Image source={{ uri: 'https://avatars.githubusercontent.com/u/11738465?v=4' }}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    marginBottom: 10,
                    borderWidth: 2,
                    borderColor: "#fff",
                  }}
                />
  
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "#fff",
                    // marginLeft: 18,
                    fontSize:22,
                  }}
                >Ahmed Salman</Text>
              </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "#fff",
            }}
          >
           {/* <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
             <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: "#d70f64",
                    fontSize: 16,
                    // fontWeight: "bold",
                  }}
                >panda</Text>
                <Text
                  style={{
                    fontStyle: "italic",
                    fontSize: 16,
                    backgroundColor: "#d70f64",
                    color: "#fff",
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >pay</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#F6D2FA",
                  paddingRight: 5,
                  paddingLeft: 5,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{
                    color: "#d70f64",
                  }}
                >Rs.0.00</Text>
              </View>
            </View>
            <Text style={{ paddingLeft: 15, position: "relative", bottom: 10 }}>Credite and payment method</Text>
            <View
              style={{
                borderBottomColor: "#DCDCDC",
                borderBottomWidth: 1,
                marginTop: 10,
              }}
            />
  */}
            <View
              style={{
                marginTop: 20,
              }}
            >
              <DrawerItemList {...props} />
            </View>
          </View>
        </DrawerContentScrollView>
        <View
          style={{
            borderBottomColor: "#DCDCDC",
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            padding: 15,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginRight: 12,
            }}
          >
            <Icon name="settings-outline" size={24} color="#ff8b3d" />
          </View>
          <View>
            <Text>Setting</Text>
          </View>
        </View>
  
        <View
          style={{
            padding: 15,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginRight: 12,
            }}
          >
            <MaterialIcons name="privacy-tip" size={24} color="#ff8b3d" />
          </View>
          <View>
            <Text>Terms & Conditions / Privacy</Text>
          </View>
        </View>
  
        <View
          style={{
            padding: 15,
            marginBottom: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              marginRight: 12,
            }}
          >
            <SimpleLineIcons name="logout" size={24} color="#ff8b3d" />
          </View>
          <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}>
              <Text>Log out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default CustomDrawer;