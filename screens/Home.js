import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import CreatePostScreen from "./CreatePostScreen";
import PostsScreen from "./PostsScreen";
import PostNavigation from "../components/PostsNavigation";

const HomeStack = createStackNavigator();

export default function Home() {
  return (
    <HomeStack.Navigator initialRouteName="PostsBar">
      <HomeStack.Screen
        name="PostsBar"
        component={PostNavigation}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
