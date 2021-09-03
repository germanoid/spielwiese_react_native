import React from "react";
import {View, ActivityIndicator, Text} from "react-native";
import getStyleSheet from "./styles";

export default function Loading() {
  const styles = getStyleSheet(false);
  
  return (
    <View style={styles.container}>
      <Text>...Loading...</Text>
      <ActivityIndicator animating={true} size="large" color="#0000ff" />
    </View>
  );
}
