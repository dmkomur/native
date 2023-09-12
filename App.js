import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [hidePassword, setHidePassword] = useState(true);
  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    setHidePassword(!hidePassword);
  };
  const [fontsLoaded] = useFonts({
    "Roboro-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboro-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboro-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/rockbg.jpg")}
          style={styles.imageBackground}
        >
          <View style={styles.formWrapper}>
            <View style={styles.photoThumb}>
              <Image
                style={styles.plusSvg}
                source={require("./assets/add.png")}
              />
            </View>
            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              inputmode={"email"}
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={hidePassword}
              textContentType="password"
              placeholderTextColor={"#BDBDBD"}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Text style={styles.inputPasswordShower}>
                {hidePassword ? "Показати" : "Приховати"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
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
    justifyContent: "center",
    paddingTop: 263,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: "center",
    paddingTop: 92,
  },
  photoThumb: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
  },
  plusSvg: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 81,
    left: 107,
  },
  header: {
    fontFamily: "Roboro-Medium",
    fontSize: 30,
    color: "#212121",
    marginBottom: 33,
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    borderStyle: "solid",
    marginBottom: 16,
    padding: 15,
    fontSize: 16,
    fontFamily: "Roboro-Regular",
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
});
