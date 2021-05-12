import React from "react";
import { Text, Image, ScrollView } from "react-native";


  const dog = {
    uri: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*",
    width: 200,
    height: 200,
  };
  
  export default MyScrollViewApp = () => (

    <ScrollView
      style={{
        padding: 40,
      }}
    >
      <Text
        style={{
          fontSize: 80,
        }}
      >
        Try to scroll down
      </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={require("./assets/wirehair.jpeg")}
      style={{
          width: 200,
          height: 200
      }} />
      <Image source={dog} />
      <Image source={dog} />
      <Text
        style={{
          fontSize: 80,
        }}
      >
        Try to scroll down again, if you like
      </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>

  );
