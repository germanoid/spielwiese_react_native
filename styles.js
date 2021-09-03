import {Platform, StyleSheet, StatusBar} from "react-native";

export const Colors = {
  dark: 'black',
  darksecond: 'gray',
  light: 'white',
  lightsecond: 'ghostwhite'
};

const lightStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.lightsecond,
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },
  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#cceced",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  },
  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: Colors.lightsecond,
    textAlign: "center"
  },
  progress: {
    width: 170
  },
  progressText: {
    fontSize: 11,
    textAlign: "center"
  },
  textInputContainer: {
    alignSelf: "stretch"
  },
  textInputLabel: {
    marginBottom: 4
  },
  textInput: {
    backgroundColor: Colors.light,
    height: 20,
    fontSize: 11
  },
  pickerHeight: {
    height: 300
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: Colors.light,
    padding: 6,
    height: 240
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: "bold"
  },
  picker: {
    width: 100,
    backgroundColor: Colors.light
  },
  selection: {
    width: 200,
    marginTop: 230,
    textAlign: "center"
  }
});

const darkStyleSheet = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.darksecond,
    ...Platform.select({
      ios: {paddingTop: 20},
      android: {paddingTop: StatusBar.currentHeight}
    })
  },
  box: {
    height: 100,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
    backgroundColor: "#cceced",
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "darkslategray"
  },
  boxText: {
    color: "darkslategray",
    fontWeight: "bold"
  },
  item: {
    margin: 5,
    padding: 5,
    color: "slategrey",
    backgroundColor: Colors.darksecond,
    textAlign: "center"
  },
  progress: {
    width: 170
  },
  progressText: {
    fontSize: 11,
    textAlign: "center"
  },
  textInputContainer: {
    alignSelf: "stretch"
  },
  textInputLabel: {
    marginBottom: 4
  },
  textInput: {
    backgroundColor: Colors.dark,
    height: 20,
    fontSize: 11
  },
  pickerHeight: {
    height: 300
  },
  pickerContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: Colors.dark,
    padding: 6,
    height: 240
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: "bold"
  },
  picker: {
    width: 100,
    backgroundColor: Colors.dark
  },
  selection: {
    width: 200,
    marginTop: 230,
    textAlign: "center"
  }
});

export default function getStyleSheet(useDarkTheme){
  return useDarkTheme ? darkStyleSheet : lightStyleSheet;
}
