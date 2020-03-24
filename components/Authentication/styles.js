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
    color: "mistyrose",
    fontWeight: "bold",
    fontSize: 18
  },
  authContainer: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "mistyrose",
    paddingRight: 60,
    paddingLeft: 60
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
    fontSize: 24,
    marginBottom: 20,
    borderBottomColor: "maroon"
  },
  profileImage: {
    height: 75,
    width: 150,
    flex: 0.5,
    marginBottom: 10
  },
  profiletext: {
    textAlign: "left",
    color: "maroon",
    fontSize: 16
  }
});

export default styles;
