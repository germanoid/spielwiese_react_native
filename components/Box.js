import React from "react";
import { PropTypes } from "prop-types";
import { View, Text } from "react-native";
import getStyleSheet from "./../styles";

export default function Box({ children }) {
  const styles = getStyleSheet(false);
  
  return (
    <View style={styles.box}>
      <Text style={styles.boxText}>{children}</Text>
    </View>
  );
}
Box.propTypes = {
 children: PropTypes.node.isRequired
};
