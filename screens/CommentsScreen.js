import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Comment from "../components/Comment";
import SvgArrowTop from "../components/SvgArrowTop";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addcomment, getposts } from "../Redux/operations";

export default function CommentsScreen() {
  const [text, setText] = useState("");
  const dispatcher = useDispatch();
  const navigation = useNavigation();
  const {
    params: { data },
  } = useRoute();
  console.log(data);

  const handleForm = () => {
    const newComment = { message: text, date: new Date() };
    console.log(data.id);
    dispatcher(
      addcomment({
        comment: [newComment, ...data.data.comments],
        docId: data.id,
      })
    )
      .then(() => dispatcher(getposts()))
      .then(() => navigation.navigate("Home"));
  };
  return (
    <View style={styles.container}>
      <View style={styles.photoThumb}>
        <ImageBackground
          source={require("../assets/photo.jpg")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>
      {data?.data?.comments?.length > 0 && (
        <ScrollView style={styles.commentsList}>
          {data.data.comments.map((el, index) => (
            <Comment key={index} odd={index % 2 === 0} info={el} />
          ))}
        </ScrollView>
      )}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          placeholderTextColor={"#BDBDBD"}
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.svgWrapper} onPress={handleForm}>
          <SvgArrowTop />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    gap: 32,
    justifyContent: "space-between",
  },
  photoThumb: {
    width: 343,
    height: 240,
    backgroundColor: "green",
    borderRadius: 8,
    overflow: "hidden",
  },
  input: {
    width: 343,
    height: 50,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    fontFamily: "Roboro-Medium",
    color: "#212121",
    padding: 15,
  },
  svgWrapper: {
    position: "absolute",
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    right: 8,
    top: 8,
  },
  commentsList: {
    flex: 1,
    gap: 24,
  },
});
