import React from "react";
import PropTypes from "prop-types";
import {View, TextInput} from "react-native";
import getStyleSheet from "./styles";

export default function ListFilter({onFilter}) {
  const styles = getStyleSheet(false);
  
  return (
    <View>
      <TextInput
        autoFocus
        placeholder="Search"
        style={styles.filter}
        onChangeText={onFilter}
      />
    </View>
  );
}

ListFilter.propTypes = {
  onFilter: PropTypes.func.isRequired
};
