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
import SvgBubble from "./SvgBubble";
import SvgLocation from "./SvgLocation";

export default function PostCard() {
  return (
    <View style={styles.container}>
      <View style={styles.photoThumb}>
        <ImageBackground />
      </View>
      <Text style={styles.textName}>Pole</Text>
      <View style={styles.textWrapper}>
        <View style={styles.commentsWrapper}>
          <SvgBubble />
          <Text style={styles.textComments}>200</Text>
        </View>
        <View style={styles.commentsWrapper}>
          <SvgLocation />
          <Text style={styles.textLocation}>
            Ivano-Frankivs'k Region, Ukraine
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "343",
    gap: 8,
  },
  photoThumb: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "green",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  textComments: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#BDBDBD",
  },
  textLocation: {
    fontFamily: "Roboro-Regular",
    fontSize: 16,
    color: "#212121",
  },
  textName: {
    fontFamily: "Roboro-Medium",
    fontSize: 16,
    color: "#212121",
    alignSelf: "flex-start",
  },
  commentsWrapper: {
    flexDirection: "row",
    gap: 8,
  },
});
