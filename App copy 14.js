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
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
        <Text
        style={{
            color: "white"
        }}>The higher the number is for flex, the 
        more space it will take up. Red 3, Blue 2, White 1</Text>
      <View
        style={{
            flex: 3,
          width: 50,
          height: 50,
          backgroundColor: "red",
        }}
      ></View>
      <View
        style={{
            flex: 2,
          width: 50,
          height: 50,
          backgroundColor: "blue",
        }}
      ></View>
      <View
        style={{
            flex: 1,
          width: 50,
          height: 50,
          backgroundColor: "white",
        }}
      ></View>
    </SafeAreaView>
  ); // end of return statement
}
