import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  authButton: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "maroon",
    marginTop: 30
  },
  authButtonText: {
    color: "#FCFDFF",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    backgroundColor: "mistyrose"
  },
  authOther: {
    color: "maroon",
    marginTop: 15
  },
  authTextInput: {
    alignSelf: "stretch",
    textAlign: "left",
    height: 40,
    marginBottom: 30,
    color: "maroon",
    borderBottomColor: "maroon",
    borderBottomWidth: 1
  },
  authTitle: {
    color: "maroon",
    fontSize: 22,
    marginBottom: 20,
    borderBottomColor: "maroon"
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "#FF6347",
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "maroon",
    fontSize: 18
  },
  username: {
    color: "maroon",
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 10
  },
  subusername: {
    color: "maroon",
    fontSize: 18,
    alignSelf: "center",
    marginLeft: 10
  }
});

export default styles;
