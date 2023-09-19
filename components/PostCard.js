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

export default function PostCard({ info }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.photoThumb}>
        <ImageBackground
          source={{ uri: info.data.photo }}
          style={{ flex: 1 }}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.textName}>{info.data.name}</Text>
      <View style={styles.textWrapper}>
        <TouchableOpacity
          style={styles.commentsWrapper}
          onPress={() => navigation.navigate("Comments", { data: info })}
        >
          <SvgBubble />
          <Text style={styles.textComments}>{info.data.comments.length}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commentsWrapper}
          onPress={() =>
            navigation.navigate("Map", { place: info.data.location })
          }
        >
          <SvgLocation />
          <Text style={styles.textLocation}>{info.data.locationName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: 343,
    gap: 8,
    marginBottom: 32,
  },
  photoThumb: {
    width: 343,
    height: 240,
    borderRadius: 8,
    backgroundColor: "grey",
    overflow: "hidden",
  },
  textWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 343,
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
    alignItems: "center",
  },
});
