import React from "react";
import { Text, View, Image } from "react-native";

export default function MyDog() {
  
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Image source={require("./assets/wirehair.jpeg")} style={{
        width: 400,
        height: 400
        
      }}/>
      <Text>
        This is not my dog, but it looks like Ava?
      </Text>
    </View>
  );
}
