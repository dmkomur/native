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

export default function Comment({ odd }) {
  return (
    <View
      style={[
        styles.container,
        odd ? { flexDirection: "row" } : { flexDirection: "row-reverse" },
      ]}
    >
      <View style={styles.photoThumb}>
        <ImageBackground />
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
          Це дуже гарно а можука цуацуа цуацуацуа цуацуацуацу цуацацуацуа
          цуацауцуацу цуацуацуац цуацуацуацу цауцуацуа.... ЦЦЦКцукцукцкц
        </Text>
        <Text
          style={[
            styles.textData,
            odd ? { textAlign: "right" } : { textAlign: "left" },
          ]}
        >
          субота 16,06,2014 16-22-04
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
