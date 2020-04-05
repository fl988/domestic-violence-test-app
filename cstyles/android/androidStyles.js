import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const PAGE_HEIGHT = Dimensions.get("window").height;
const PAGE_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  navBackButton: {
    marginTop: PAGE_HEIGHT / 1.2,
    marginLeft: 60,
    marginRight: 60
  },
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
  splashScreenContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
  buttonTextNoMargin: {
    textAlign: "center",
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
    fontSize: PAGE_WIDTH / 15,
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
    // borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 100,
    width: PAGE_WIDTH - 100,
    margin: 50,
    // backgroundColor: "#fff",
    paddingTop: 70
  },
  frameV2: {
    position: "absolute",
    left: 0,
    bottom: 110,
    // borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 20,
    width: PAGE_WIDTH - 100,
    margin: 50
  },
  frameHalf: {
    position: "absolute",
    left: 0,
    bottom: 160,
    borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 200,
    width: PAGE_WIDTH - 200,
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
  testbtn: {
    backgroundColor: "rgba(0,0,0, 0)",
    margin: 12,
    marginTop: 40,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30
  },
  button3: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    margin: 12,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30
  },
  button4: {
    margin: 15,
    height: 40,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
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
  },

  // MODAL STYLE
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray"
  },
  bodyText: {},
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
    color: "#000"
  },
  modal: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    backgroundColor: "#f9fafb",
    width: "80%",
    borderRadius: 5
  },
  modalHeader: {},
  modalBody: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  modalFooter: {},
  actions: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  actionText: {
    color: "#fff"
  },

  //Accordion Styles
  accordionTitle: {
    fontSize: 14,
    fontWeight: "bold"
  },
  accordionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 46,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)" //Charcoal
  },
  accordionParentHr: {
    height: 1,
    color: "#fff",
    width: "100%"
  },
  accordionChild: {
    backgroundColor: "#fff", //Light grey
    opacity: 0.9,
    padding: 16
  }
});
