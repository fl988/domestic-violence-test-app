import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const PAGE_WIDTH = Dimensions.get("window").width;

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
    color: "white",
    width: "20%",
    borderColor: "#562056",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },

  shadow: {
    elevation: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 20,
    shadowOffset: {
      height: 12
    }
  },
  title: {
    fontSize: PAGE_WIDTH / 12,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center"
  },
  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: "#fff",
    backgroundColor: "transparent",
    marginTop: 20,
    lineHeight: 25,
    textAlign: "center"
  },
  page: {
    width: PAGE_WIDTH,
    marginTop: 40
  },
  card: {
    position: "absolute",
    margin: 12,
    marginTop: 60,
    left: 12,
    top: 0,
    right: 0,
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 140
  },
  frame: {
    position: "absolute",
    left: 0,
    bottom: 160,
    borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 100,
    width: PAGE_WIDTH - 100,
    margin: 50,
    paddingTop: 70
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#fff",
    borderRadius: 3,
    backgroundColor: "#fff",
    opacity: 0.5,
    justifyContent: "center",
    textAlign: "center"
  },
  textInputStyleNew: {
    backgroundColor: "#fff",
    opacity: 0.5,
    margin: 12,
    marginTop: 40,
    left: PAGE_WIDTH / 2 - 100,
    alignItems: "center",
    padding: 10,
    marginBottom: 20,
    justifyContent: "center",
    textAlign: "center"
  },
  button: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    position: "absolute",
    margin: 12,
    marginTop: 40,
    left: PAGE_WIDTH / 2 - 100,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30
  },
  button2: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    margin: 12,
    marginTop: 40,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30
  },
  buttonText: {
    margin: 15,
    marginLeft: 50,
    marginRight: 40,
    color: "#fff",
    fontSize: 14
  },
  photo: {
    flex: 1,
    borderRadius: (PAGE_WIDTH - 100) / 2
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b2056"
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#692769"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#56203b"
  }
});
