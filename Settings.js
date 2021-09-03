import React from "react";
import { View, Text, Button } from "react-native";
import getStyleSheet from "./styles";

export default function Settings({ navigation }) {
  const styles = getStyleSheet(false);
  
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
