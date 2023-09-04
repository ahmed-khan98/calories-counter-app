import * as React from "react";
import 'react-native-gesture-handler';
import Register from "./Register";
import SignIn from "./Login";
import Home from "./Home";
import Registration from "./Registration";
import CameraScreen from './Camera'
// import Profile from "./screen/Profile";
import CustomDrawer from "./Component/CustomerDrawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

export default function Rounting() {
  return (
     <MyDrawer/>
      // <MyStack/>
    //  <MyTabs/>
  );
}

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
    
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={SignIn} options={{ headerShown: false }}/>
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      <Stack.Screen name="Registration" component={Registration} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Camera" component={CustomCamera} options={{ headerShown: false }} /> */}

    </Stack.Navigator>
  );
}

// function MyTabs() {
//   return (
//     <Tab.Navigator >
//       <Tab.Screen name="Home" component={MyDrawer} options={{ headerShown: false }} />
//       <Tab.Screen name="Profile" component={Profile}/>
//       <Tab.Screen name="GoalData" component={GoalData} options={{ headerShown: false }}/>
//     </Tab.Navigator>
//   );
// }




function MyDrawer() {
  return (

    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: "#ff8b3d",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#ff8b3d",
      }}
    >

      <Drawer.Screen name="Home1" component={MyStack}
        options={{
          headerShown: false ,
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: "#ff8b3d",
          },
        }}
        screenOptions={{
          overlayColor: 'transparent',
        }}
      />
      {/* <Drawer.Screen name="Profile" component={Profile}
        options={{
         
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: "#ff8b3d",
          },
        }}
        screenOptions={{
          overlayColor: 'transparent',
        }}
      /> */}

      {/* <Drawer.Screen name="Profile" component={Registration}
        options={{
          headerShown: false ,
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: "#ff8b3d",
          },
        }}
        screenOptions={{
           overlayColor: 'transparent',
        }}
      /> */}
      <Drawer.Screen name="History Diet" component={CameraScreen}
        options={{
          headerShown: false ,
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: "#ff8b3d",
          },
        }}
        screenOptions={{
           overlayColor: 'transparent',
        }}
      />


    </Drawer.Navigator>


  );
}