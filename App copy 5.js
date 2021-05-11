import React from "react";
import { Text, View, TextInput } from "react-native";

function Student(props) {
  return (
    <View>
      <Text>I am a student, my name is {props.name} lol</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to CIS340</Text>
      <Student name = "Isabel"/>
      <Student name = "Bryan"/>
      <Student name = "Noah" />
      <Student name = "John" />
    </View>
  );
}
