import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rockbg.jpg")}
        style={styles.bg}
        resizeMode="cover"
      />
      <Text>ProfileScreen</Text>
    </View>
  );
}
const screenSize = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
  },
  title: {
    fontFamily: "Roboro-Medium",
    fontSize: 30,
    color: "#212121",
    marginBottom: 33,
  },
  inputsContainer: { gap: 16, width: "100%", alignItems: "center" },
  input: {
    padding: 15,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E8E8E8",
    width: 343,
    height: 50,

    fontSize: 16,
    fontFamily: "Roboro-Regular",
  },
  inputFocused: {
    borderColor: "#FF6C00",
  },
  inputPasswordShower: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "Roboro-Regular",
    color: "#1B4371",
    position: "absolute",
    bottom: 30,
    left: 70,
  },
  scrollViewContainer: {
    minHeight: screenSize.height,
    justifyContent: "flex-end",
  },
  formWrapper: {
    paddingTop: 32,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  button: {
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  buttonText: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#fff",
  },
  linkText: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#1B4371",
  },
  linkTextLine: { textDecorationLine: "underline" },
});
