import {Platform, StyleSheet, StatusBar} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "ghostwhite",
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
    backgroundColor: "ghostwhite",
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
    backgroundColor: "white",
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
    backgroundColor: "white",
    padding: 6,
    height: 240
  },
  pickerLabel: {
    fontSize: 14,
    fontWeight: "bold"
  },
  picker: {
    width: 100,
    backgroundColor: "white"
  },
  selection: {
    width: 200,
    marginTop: 230,
    textAlign: "center"
  }
});
