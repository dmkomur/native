import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PostNavigation from "../components/PostsNavigation";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";
import SvgArrow from "../components/SvgArrow";
import CreatePostScreen from "./CreatePostScreen";
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
      <HomeStack.Screen
        name="Create"
        component={CreatePostScreen}
        options={({ navigation }) => ({
          headerTitle: "Створити пост",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboro-Medium",
            color: "#212121",
            textAlign: "center",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            >
              <SvgArrow />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          headerTitle: "Коментарі",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboro-Medium",
            color: "#212121",
            textAlign: "center",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            >
              <SvgArrow />
            </TouchableOpacity>
          ),
        })}
      />
      <HomeStack.Screen
        name="Map"
        component={MapScreen}
        options={({ navigation }) => ({
          headerTitle: "Геолокація",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "Roboro-Medium",
            color: "#212121",
            textAlign: "center",
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 16 }}
            >
              <SvgArrow />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
}

const styles = StyleSheet.create({});
