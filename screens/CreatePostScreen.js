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
import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import SvgCamera from "../components/SvgCamera";
import SvgLocation from "../components/SvgLocation";
import SvgTresh from "../components/SvgTresh";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { createpost, getposts } from "../Redux/operations";
import { db, storage } from "../config";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

export default function CreatePostScreen() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState(null);
  const [photo, setPhoto] = useState("");
  const [locationName, setLocationName] = useState("");
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const navigation = useNavigation();
  const uid = useSelector((state) => state.main.user.uid);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const uploadImg = async (img) => {
    try {
      const response = await fetch(img);
      const file = await response.blob();
      await uploadBytes(ref(storage, `photos/${file._data.blobId}`), file);
      const photoUrl = await getDownloadURL(
        ref(storage, `photos/${file._data.blobId}`)
      );
      await setPhoto(photoUrl);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePhoto = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();
      await uploadImg(uri);
    }
  };

  const handleForm = async () => {
    let currentLocation = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    };
    await setLocation(coords);
    await dispatch(
      createpost({
        name,
        location,
        photo,
        locationName,
        likes: 0,
        comments: [],
        owner: uid,
      })
    )
      .then(() => navigation.navigate("Posts"))
      .then(() => dispatch(getposts()));
  };
  const resetForm = () => {
    setName("");
    setLocation(null);
    setLocationName("");
    setPhoto("");
  };
  return (
    <KeyboardAvoidingView
      style={styles.containerTop}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.photoBlock}>
          <View style={styles.photoThumb}>
            <Camera style={styles.camera} type={type} ref={setCameraRef}>
              <TouchableOpacity
                style={styles.flipContainer}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Ionicons name="camera-reverse" size={32} color="#F6F6F6" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.svgThumb} onPress={handlePhoto}>
                <SvgCamera />
              </TouchableOpacity>
            </Camera>
          </View>
          <Text style={[styles.textPhoto, photo ? { color: "#FF6C00" } : {}]}>
            {photo ? "Фото додано" : "Обов'язково зробіть фото"}
          </Text>
        </View>
        <View style={styles.inputBlock}>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            placeholderTextColor={"#BDBDBD"}
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={[styles.input, { paddingLeft: 25 }]}
            placeholder="Місцевість..."
            placeholderTextColor={"#BDBDBD"}
            value={locationName}
            onChangeText={setLocationName}
          />
          <SvgLocation style={styles.svgLocation} />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleForm}>
          <Text style={styles.buttonText}>Опубліковати</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delWraper} onPress={resetForm}>
          <SvgTresh />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
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
    overflow: "hidden",
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
  camera: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  photoView: {
    alignSelf: "flex-end",
    backgroundColor: "red",
    width: "100%",
    height: 30,
  },

  flipContainer: {
    position: "absolute",
    top: 16,
    left: 16,
  },
});
