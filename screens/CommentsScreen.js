import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Comment from "../components/Comment";
import SvgArrowTop from "../components/SvgArrowTop";

export default function CommentsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.photoThumb}></View>
      <View style={styles.commentsList}>
        <Comment />
        <Comment odd />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Коментувати..."
          placeholderTextColor={"#BDBDBD"}
        />
        <TouchableOpacity style={styles.svgWrapper}>
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
