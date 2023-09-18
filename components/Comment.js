import React from "react";

import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Comment({ odd, data }) {
  const newDate = new Date(data.date);
  const newDateString = newDate.toLocaleString();
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
        />
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
          {data.message}
        </Text>
        <Text
          style={[
            styles.textData,
            odd ? { textAlign: "right" } : { textAlign: "left" },
          ]}
        >
          {newDateString}
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
    paddingBottom: 32,
  },
  photoThumb: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "green",
    overflow: "hidden",
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
