import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text } from "react-native";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import Home from "./screens/Home";

import { PersistGate } from "redux-persist/integration/react";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./Redux/store";

const AuthStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboro-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboro-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboro-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer>
          <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <AuthStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <AuthStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          </AuthStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({});
