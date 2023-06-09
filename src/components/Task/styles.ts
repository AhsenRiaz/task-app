import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#c9c9c9',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10 
  },
  title: {
    color: '#1f1e25',
    flex: 1,
    fontSize: 16,
    marginLeft: 16
    // marginTop: 50,
    // fontSize: 24, 
    // textAlign: "center",
    // color: "white"
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#e23c44',
    alignItems: 'center',
    justifyContent: 'center',
  }
})