import React from "react";

import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function UserInfo({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.photoThumb}>
        <ImageBackground
          source={require("../assets/avatar.webp")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.textName}>Natali Romanova</Text>
        <Text style={styles.textEmail}>{user?.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "start",
    height: 60,
    width: "100%",
  },
  photoThumb: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: "green",
    marginRight: 8,
    overflow: "hidden",
  },
  textWrapper: {},
  textEmail: {
    fontFamily: "Roboro-Regular",
    fontSize: 11,
    color: "#212121",
  },
  textName: {
    fontFamily: "Roboro-Bold",
    fontSize: 13,
    color: "#212121",
  },
});
