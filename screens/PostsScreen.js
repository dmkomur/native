import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View, SafeAreaView } from "react-native";
import UserInfo from "../components/UserInfo";
import PostCard from "../components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getposts } from "../Redux/operations";

export default function PostsScreen() {
  const data = useSelector((state) => state.main);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getposts());
  }, []);
  useEffect(() => {
    console.log(data.posts);
  }, [data]);

  return (
    <View style={styles.container}>
      <UserInfo user={data.user} />
      {data?.posts?.length > 0 && (
        <View style={styles.listWrapper}>
          <FlatList
            data={data.posts}
            renderItem={({ item }) => <PostCard info={item} />}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
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
  listWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
