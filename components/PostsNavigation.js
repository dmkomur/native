import React from "react";
import ProfileScreen from "../screens/ProfileScreen";
import CreatePostScreen from "../screens/CreatePostScreen";
import PostsScreen from "../screens/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { signout } from "../Redux/operations";
import SvgLogout from "./SvgLogout";
import SvgArrow from "./SvgArrow";
import SvgAdd from "./SvgAdd";
import SvgGrid from "./SvgGrid";
import SvgUser from "./SvgUser";

const Tabs = createBottomTabNavigator();

export default function PostNavigation({ navigation }) {
  const onPressButton = (e) => {
    e.preventDefault();
    navigation.navigate("Create");
  };
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(signout()).then(() => navigation.navigate("Login"));
  };
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          alignItems: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconComponent;

          if (route.name === "Posts") {
            iconComponent = <SvgGrid />;
          } else if (route.name === "Create") {
            iconComponent = (
              <View
                style={{
                  padding: 16,
                  backgroundColor: "#FF6C00",
                  height: 40,
                  width: 70,
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SvgAdd />
              </View>
            );
          } else if (route.name === "Profile") {
            iconComponent = <SvgUser />;
          }

          return iconComponent;
        },
        tabBarLabel: () => null,
      })}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity onPress={handleLogout}>
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
        component={View}
        listeners={() => ({
          tabPress: (event) => onPressButton(event),
        })}
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

{
  /* <Tabs.Screen
  name="Create"
  component={CreatePostScreen}
  options={({ route }) => ({
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
    tabBarVisible: route.state && route.state.index === 0 ? true : false, // Устанавливаем tabBarVisible в false на этом экране
  })}
/>; */
}
