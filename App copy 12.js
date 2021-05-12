import React from "react";
import { Text, SectionList, SafeAreaView } from "react-native";

export default StatesApp = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 22,
        alignItems: "flex-start",
      }}
    >
      <SectionList
        sections={[
          { title: "A", data: ["Alabama", "Alaska", "Arizona", "Arkansas"] },
          { title: "C", data: ["California", "Colorado", "Connecticut"] },
          { title: "D", data: ["Delaware"] },
          { title: "F", data: ["Florida"] },
          { title: "G", data: ["Georgia"] },
          { title: "H", data: ["Hawaii"] },
          { title: "I", data: ["Idaho", "Illinois", "Indiana", "Iowa"] },
          { title: "K", data: ["Kansas", "Kentucky"] },
          { title: "L", data: ["Louisiana"] },
          {
            title: "M",
            data: [
              "Maine",
              "Maryland",
              "Massachusetts",
              "Michigan",
              "Minnesota",
              "Mississippi",
              "Missouri",
              "Montana",
            ],
          },
          {
            title: "N",
            data: [
              "Nebraska",
              "Nevada",
              "New Hampshire",
              "New Jersey",
              "New Mexico",
              "New York",
              "North Carolina",
              "North Dakota",
            ],
          },
          { title: "O", data: ["Ohio", "Oklahoma", "Oregon"] },
          { title: "P", data: ["Pennsylvania"] },
          { title: "R", data: ["Rhode Island"] },
          { title: "S", data: ["South Carolina", "South Dakota"] },
          { title: "T", data: ["Tennessee", "Texas"] },
          { title: "U", data: ["Utah"] },
          { title: "V", data: ["Vermont", "Virginia"] },
          {
            title: "W",
            data: ["Washington", "West Virginia", "Wisconsin", "Wyoming"],
          },
        ]}
        renderItem={({ item }) => (
          <Text
            style={{
              padding: 10,
              fontSize: 20,
              height: 44,
            }}
          >
            {item}
          </Text>
        )}
        renderSectionHeader={({section}) => <Text
        style={{
            paddingTop: 4,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 4,
            fontSize: 20,
            fontWeight: "bold",
            fontFamily: "Cochin",
            backgroundColor: "#9FA8DA"

              
        }}>
            {section.title}

        </Text>}
        keyExtractor={(item,index) => index}
      />
    </SafeAreaView>
  ); // end of return statement
};
