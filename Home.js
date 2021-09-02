import {StatusBar} from "expo-status-bar";
import React from "react";
import {StyleSheet, Text, View, Button} from "react-native";
import Box from "./components/Box";
import styles from "./styles";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Box>
        <Button
          title="First Item"
          onPress={() =>
            navigation.navigate("Details", {
              title: "First Item",
              content: "First Item Content",
              stock: 1
            })
          }
        />
      </Box>
      <Box>
        <Button
          title="Second Item"
          onPress={() =>
            navigation.navigate("Details", {
              title: "Second Item",
              content: "Second Item Content",
              stock: 0
            })
          }
        />
      </Box>
      <Box>
        <Button
          title="Item list"
          onPress={() => navigation.navigate("ItemList")}
        />
      </Box>
      <Box>
        <Button
          title="Sorted list"
          onPress={() => navigation.navigate("ListContainer")}
        />
      </Box>
      <Box>
        <Button
          title="Ladescreen"
          onPress={() => navigation.navigate("Loading")}
        />
      </Box>
      <Box>
        <Button
          title="Ladebalken"
          onPress={() => navigation.navigate("MeasuringProgress")}
        />
      </Box>
      <Box>
        <Button
          title="User Input"
          onPress={() => navigation.navigate("UserInput")}
        />
      </Box>
      <Box>
        <Button
          title="Select options"
          onPress={() => navigation.navigate("Select")}
        />
      </Box>
      <StatusBar style="auto" />
    </View>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam("title"),
  headerRight: () => (
    <Button
      title="Settings"
      onPress={() => navigation.navigate("Settings")}
    />
  )
});
