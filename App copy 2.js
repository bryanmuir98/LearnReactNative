import React from "react";
import { Text, View } from "react-native";

export default function MyApp() {
  function getFullName(fName, lName) {
    return (
      <Text>
        {"\n"}You're name is {fName} {lName}
      </Text>
    );
  }

  const pet = "Dog";
  return (
    <View>
      <Text>
        {"\n\n\n\n\n\n\n\n\n\n\n\n\n"}
        Hello World, I have a {pet}!{getFullName("Bryan", "Muir")}
      </Text>
      <Text>
        {"\n"}Now I can use multiple text brackets
      </Text>
    </View>
  );
}
