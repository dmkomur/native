import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/rockbg.jpg")}
        style={styles.imageBackground}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center", // Выравнивание элементов по центру изображения
  },
});
