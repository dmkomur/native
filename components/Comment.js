import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Comment({ odd, info }) {
  return (
    <View
      style={[
        styles.container,
        odd ? { flexDirection: "row" } : { flexDirection: "row-reverse" },
      ]}
    >
      <View style={styles.photoThumb}>
        <ImageBackground
          source={require("../assets/av.webp")}
          style={{ flex: 1 }}
          resizeMode="cover"
        />{" "}
      </View>
      <View
        style={[
          styles.textWrapper,
          odd ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 },
        ]}
      >
        <Text
          style={[
            styles.textComment,
            odd ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" },
          ]}
        >
          {info.message}
        </Text>
        <Text
          style={[
            styles.textData,
            odd ? { textAlign: "right" } : { textAlign: "left" },
          ]}
        >
          {info.date}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: 343,
    gap: 16,
    alignItems: "flex-start",
  },
  photoThumb: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "green",
  },

  textComment: {
    fontFamily: "Roboro-Regular",
    fontSize: 13,
    color: "#212121",
  },
  textData: {
    fontFamily: "Roboro-Regular",
    fontSize: 10,
    color: "#BDBDBD",
  },
  textWrapper: {
    backgroundColor: "#F6F6F6",
    borderRadius: 6,
    padding: 16,
    width: 299,
  },
});
