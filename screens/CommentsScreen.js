import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Comment from "../components/Comment";
import SvgArrowTop from "../components/SvgArrowTop";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addcomment, getposts } from "../Redux/operations";

export default function CommentsScreen() {
  const [text, setText] = useState("");
  const dispatcher = useDispatch();

  const {
    params: { data },
  } = useRoute();

  const allPosts = useSelector((state) => state.main.posts);
  const currentPost = allPosts.find((post) => post.id === data.id);
  const handleForm = () => {
    const newComment = { message: text, date: new Date() };
    dispatcher(
      addcomment({
        comment: [newComment, ...data.data.comments],
        docId: data.id,
      })
    )
      .then(() => dispatcher(getposts()))
      .then(() => setText(""));
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

      {currentPost && (
        <View style={styles.commentsList}>
          <FlatList
            data={currentPost.data.comments}
            renderItem={({ item, index }) => (
              <Comment odd={index % 2 === 0} data={item} />
            )}
            keyExtractor={(item, index) => item.date.toString()}
          />
        </View>
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
  },
});
