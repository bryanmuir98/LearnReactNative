import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  BackHandler,
} from "react-native";

export default function USAApp() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column-reverse",
        backgroundColor: "black",
        
        justifyContent: "space-between"
        
      }}
    >
        
        
      <View
        style={{
          
          width: 50,
          height: 50,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
       
          width: 50,
          height: 50,
          backgroundColor: "blue",
        }}
      ></View>
      <View
        style={{
         
          width: 50,
          height: 50,
          backgroundColor: "white",
        }}
      ></View>
    </SafeAreaView>
  ); // end of return statement
}
