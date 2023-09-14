import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

import SvgCamera from "../components/SvgCamera";
import SvgLocation from "../components/SvgLocation";
import SvgTresh from "../components/SvgTresh";

export default function CreatePostScreen() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const handleForm = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.photoBlock}>
        <View style={styles.photoThumb}>
          <View style={styles.svgThumb}>
            <SvgCamera />
          </View>
        </View>
        <Text style={styles.textPhoto}>Завантажте фото</Text>
      </View>
      <View style={styles.inputBlock}>
        <TextInput
          style={styles.input}
          placeholder="Назва..."
          placeholderTextColor={"#BDBDBD"}
        />
        <TextInput
          style={[styles.input, { paddingLeft: 25 }]}
          placeholder="Місцевість..."
          placeholderTextColor={"#BDBDBD"}
        />
        <SvgLocation style={styles.svgLocation} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Опубліковати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delWraper}>
        <SvgTresh />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 32,
  },
  photoThumb: {
    width: 343,
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  photoBlock: {
    width: 343,
  },
  svgThumb: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  textPhoto: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#BDBDBD",
    alignSelf: "flex-start",
  },
  inputBlock: {
    gap: 16,
  },
  input: {
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    width: 343,
    height: 50,
    fontSize: 16,
    fontFamily: "Roboro-Regular",
    color: "#212121",
  },
  svgLocation: {
    position: "absolute",
    top: 80,
  },
  button: {
    width: 343,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#fff",
  },
  delWraper: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});
