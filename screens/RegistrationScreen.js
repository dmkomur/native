import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import SvgPlus from "../components/SvgPlus";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { signup, updateuser } from "../Redux/operations";

export default function RegistrationScreen() {
  const [shift, setShift] = useState(false);
  const [position] = useState(new Animated.Value(0));
  const [hidePassword, setHidePassword] = useState(true);
  const [input1Focused, setInput1Focused] = useState(false);
  const [input2Focused, setInput2Focused] = useState(false);
  const [input3Focused, setInput3Focused] = useState(false);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // const allStore = useSelector((state) => state.main);
  // useEffect(() => {
  //   console.log(allStore);
  // }, [allStore]);

  const togglePasswordVisibility = (event) => {
    event.stopPropagation();
    setHidePassword(!hidePassword);
  };

  const handleForm = () => {
    dispatch(signup({ email, password })).then(() =>
      navigation.navigate("Home")
    );
  };

  useEffect(() => {
    const listenerShow = Keyboard.addListener("keyboardDidShow", () => {
      setShift(true);
    });
    const listenerHide = Keyboard.addListener("keyboardDidHide", () => {
      setShift(false);
    });
    return () => {
      listenerShow.remove();
      listenerHide.remove();
    };
  }, []);
  useEffect(() => {
    Animated.timing(position, {
      toValue: shift ? 130 : 50,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [shift]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../assets/rockbg.jpg")}
          style={styles.bg}
          resizeMode="cover"
        />
        <ScrollView
          contentContainerStyle={styles.scrollViewContainer}
          bounces={false}
        >
          <Animated.View
            style={[styles.formWrapper, { paddingBottom: position }]}
          >
            <View style={styles.avavtarThumb}>
              <SvgPlus style={styles.plusSvg} />
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <View style={styles.inputsContainer}>
              <TextInput
                onFocus={() => setInput1Focused(true)}
                onBlur={() => setInput1Focused(false)}
                style={[styles.input, input1Focused && styles.inputFocused]}
                placeholder="Логін"
                placeholderTextColor={"#BDBDBD"}
                value={login}
                onChangeText={setLogin}
              />
              <TextInput
                onFocus={() => setInput2Focused(true)}
                onBlur={() => setInput2Focused(false)}
                style={[styles.input, input2Focused && styles.inputFocused]}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={"#BDBDBD"}
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                onFocus={() => setInput3Focused(true)}
                onBlur={() => setInput3Focused(false)}
                style={[styles.input, input3Focused && styles.inputFocused]}
                placeholder="Пароль"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Text style={styles.inputPasswordShower}>
                  {hidePassword ? "Показати" : "Приховати"}
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => handleForm()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <Text
              style={styles.linkText}
              onPress={() => navigation.navigate("Login")}
            >
              Вже є акаунт? Увійти
            </Text>
          </Animated.View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
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
  avavtarThumb: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    position: "absolute",
    top: -60,
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
  plusSvg: {
    width: 25,
    height: 25,
    position: "absolute",
    top: 81,
    left: 107,
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
    paddingTop: 92,
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
});
