import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserInfo from "../components/UserInfo";
import PostCard from "../components/PostCard";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <UserInfo />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
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
});
