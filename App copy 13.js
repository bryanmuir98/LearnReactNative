import React from "react";
import { StyleSheet, Text, SafeAreaView, ImageBackground } from "react-native";

export default function StatesApp() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.smallRed}>This should be small red text</Text>
      <Text style={styles.largeGreen}>This should be large green text</Text>
      <Text style={styles.smallRed, styles.largeGreen}> Small red text, then big green text</Text>
      <Text style={styles.largeGreen, styles.smallRed}> Large green text, then small red text</Text>
      <Text>Whichever style comes second has priority</Text>

    </SafeAreaView> // end of return statement
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C9D4FFFF"
    
  },

  largeGreen: {
    color: "green",
    fontWeight: "bold",
    fontSize: 40,
  },

  smallRed: {
    color: "red",
    fontSize: 15,
  },
});
