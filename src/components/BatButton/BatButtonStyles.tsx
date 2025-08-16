import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#404040",
    height: 50,
    borderRadius: 5,
    // borderWidth: 2,
    marginTop: 10,
    // borderColor: "#BF6B04",
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    color: "#050505",
    opacity: 0.5,
    fontWeight: 'bold',
    letterSpacing: 2
  },
  passCopyMessage: {
    color: '#BF6b04',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    opacity: 0.9
  }
})