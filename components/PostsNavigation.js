import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import PostsScreen from "../screens/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import SvgLogout from "./SvgLogout";
import SvgArrow from "./SvgArrow";

const Tabs = createBottomTabNavigator();

export default function PostNavigation() {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "apps" : "apps";
          } else if (route.name === "Create") {
            iconName = focused ? "plus" : "plus";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person";
          }
          return <Octicons name={iconName} size={size} color={color} />;
        },
        tabBarLabel: () => null,
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "#212121",
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity>
                <SvgLogout style={{ marginRight: 16 }} />
              </TouchableOpacity>
            );
          },
          headerTitle: () => (
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboro-Medium",
                color: "#212121",
                textAlign: "center",
              }}
            >
              Публікації
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="Create"
        component={CreatePostScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgArrow style={{ marginLeft: 16 }} />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Roboro-Medium",
                color: "#212121",
                textAlign: "center",
              }}
            >
              Створити публікацію
            </Text>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
}
