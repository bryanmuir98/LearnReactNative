import React from "react";
import { Text, TextInput, View } from "react-native";

export default function MyApp() {
  return (
    <View>
      <Text>{"\n\n\n\n\n\n"}</Text>
      <TextInput
       style={{
         height: 40,
         borderColor: "dodgerblue",
         borderWidth: 3,
        
       }}
       defaultValue = "Enter Your Input"></TextInput>
    </View>
  );
}