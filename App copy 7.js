import React, { useState } from "react";
import { Text, View, Button } from "react-native";

function TV(props) {
  const [isOff, setIsOff] = useState(true);
  
  
  return (
    <View>
      <Text>
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : "On"}
      </Text>
      
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Off" : "On"}
        color="#2196F3"        
        
      />
    </View>
  );
}

export default function MultiTVs() {
  return (
    <View>
      <TV name="LC" />
      <TV name="Sony" />

    </View>
  );
}
