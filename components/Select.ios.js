import React from "react";
import PropTypes from "prop-types";
import {View, Picker, Text} from "react-native";
import getStyleSheet from "./../styles";

export default function Select(props) {
  const styles = getStyleSheet(false);
  
  return (
    <View style={styles.pickerHeight}>
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>{props.label}</Text>
        <Picker style={styles.picker} {...props}>
          {props.items.map(i => (
            <Picker.Item key={i.label} {...i} />
          ))}
        </Picker>
      </View>
    </View>
  );
}

Select.propTypes = {
  items: PropTypes.array,
  label: PropTypes.string
};
