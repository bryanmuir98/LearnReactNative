import React from "react";
import { Text, View } from "react-native";

function MyApp() {
  return (
    <View>
      <Text>I am a CIS student, I'm excited to be in your class</Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>
        {"\n\n\n\n\n\n\n"} Welcome to My Class
      </Text>
      <MyApp/><MyApp/><MyApp/><MyApp/><MyApp/><MyApp/>
    </View>
  )
}