import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  screenDimension: {
    width,
    height,
    backgroundColor: "#101726"
  },
  screen: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  container: {
    flex: 1
  },
  screenHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  screenText: {
    color: "#fff"
  },

  linearGradient: {
    borderRadius: 10
  },
  buttonText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  whiteText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  greyText: {
    textAlign: "center",
    margin: 10,
    color: "#464950",
    backgroundColor: "transparent"
  },
  textInputStyle: {
    color: "#fff",
    width: "80%",
    borderColor: "#562056",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }
});
