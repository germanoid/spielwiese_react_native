import React from "react";
import {Text, View, FlatList} from "react-native";
import styles from "./styles";
const data = new Array(20)
  .fill(null)
  .map((v, i) => ({key: i.toString(), value: `Item ${i}`}));

export default function ItemList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.value}</Text>}
      />
    </View>
  );
}
