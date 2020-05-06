import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const PAGE_HEIGHT = Dimensions.get("window").height;
const PAGE_WIDTH = Dimensions.get("window").width;

export default StyleSheet.create({
  /*************************************/
  // Colors
  bgPurple1: {
    backgroundColor: "#101726",
  },
  bgPurple2: {
    backgroundColor: "#2A1D59",
  },
  /*************************************/

  /*************************************/
  navBackButton: {
    marginTop: PAGE_HEIGHT / 1.2,
    marginLeft: 60,
    marginRight: 60,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  screenDimension: {
    width,
    height,
    backgroundColor: "#101726",
  },
  screen: {
    flexDirection: "column",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  container: {
    flex: 1,
  },
  splashScreenContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttonText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  whiteText: {
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: PAGE_WIDTH / 15,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent",
    textAlign: "center",
  },
  desc: {
    fontSize: PAGE_WIDTH / 24,
    color: "#fff",
    backgroundColor: "transparent",
    marginTop: 20,
    lineHeight: 25,
    textAlign: "center",
  },
  page: {
    width: PAGE_WIDTH,
    marginTop: 40,
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
    paddingBottom: 140,
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
    paddingTop: 70,
  },
  frameV2: {
    position: "absolute",
    left: 0,
    bottom: 110,
    // borderRadius: (PAGE_WIDTH - 100) / 2,
    height: PAGE_WIDTH - 20,
    width: PAGE_WIDTH - 100,
    margin: 50,
  },
  sectionStyle: {
    flexDirection: "row",
    margin: 15,
    height: 40,
    borderColor: "#fff",
    borderRadius: 3,
    backgroundColor: "#fff",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#fff",
    borderRadius: 3,
    backgroundColor: "#fff",
    opacity: 0.5,
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    position: "absolute",
    margin: 12,
    marginTop: 40,
    left: PAGE_WIDTH / 2 - 100,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30,
  },
  nextBtnV2: {
    backgroundColor: "rgba(0,0,0, 0.3)",
    margin: 12,
    marginTop: 40,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30,
  },
  nextBtn: {
    backgroundColor: "rgba(0,0,0, 0)",
    margin: 12,
    marginTop: 40,
    borderRadius: 50,
    alignItems: "center",
    bottom: 30,
  },
  userTypeBtn: {
    margin: 15,
    height: 45,
    borderRadius: 3,
    backgroundColor: "rgba(255,255,255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    margin: 15,
    marginLeft: 50,
    marginRight: 40,
    color: "#fff",
    fontSize: 14,
  },
  photo: {
    flex: 1,
    borderRadius: (PAGE_WIDTH - 100) / 2,
  },

  /*************************************/
  // MODAL STYLE
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
  },
  bodyText: {},
  modalTitle: {
    fontWeight: "bold",
    fontSize: 20,
    padding: 15,
    color: "#000",
  },
  modal: {
    backgroundColor: "#00000099",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    backgroundColor: "#f9fafb",
    width: "80%",
    borderRadius: 5,
  },
  modalHeader: {},
  modalBody: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  modalFooter: {},
  actions: {
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    color: "#fff",
  },
  /*************************************/

  /*************************************/
  //Accordion Styles
  accordionTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  accordionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 46,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "rgb(255,255,255)", //Charcoal
  },
  accordionParentHr: {
    height: 1,
    color: "#fff",
    width: "100%",
  },
  accordionChild: {
    backgroundColor: "#fff", //Light grey
    opacity: 0.9,
    padding: 16,
  },
  /*************************************/

  /*************************************/
  // Progress Gauge Components
  gauge: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  /*************************************/
});
