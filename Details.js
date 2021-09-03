import React from "react";
import { View, Text, Button } from "react-native";
import getStyleSheet from "./styles";


export default function Details({ navigation }) {
  const styles = getStyleSheet(false);

  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
    </View>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("title"),
  headerRight: () => (
    <Button
      title="Buy"
      onPress={() => {}}
      disabled={navigation.getParam("stock") === 0}
    />
  )
});
