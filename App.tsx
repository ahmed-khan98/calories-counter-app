/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";

import Home from "./src/Home";
import Register from "./src/Register";
import Registration from "./src/Registration";
import Login from "./src/Login";
import Rounting from "./src/Rounting";

function App(){
  return (
    <NavigationContainer>
<Rounting/>
</NavigationContainer>
    );
}



export default App;
