import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import SvgLogout from "../components/SvgLogout";
import PostCard from "../components/PostCard";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rockbg.jpg")}
        style={styles.bg}
        resizeMode="cover"
      />
      <View style={styles.postsContainer}>
        <View style={styles.photoThumb}></View>
        <SvgLogout style={styles.svgLogout} />
        <Text style={styles.title}>ProfileScreen</Text>
        <PostCard />
        <PostCard />
        <PostCard />
      </View>
    </View>
  );
}
const screenSize = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    top: 0,
    position: "absolute",
    height: screenSize.height,
    width: screenSize.width,
  },
  title: {
    fontFamily: "Roboro-Medium",
    fontSize: 30,
    color: "#212121",
    marginBottom: 33,
    marginTop: 46,
  },
  postsContainer: {
    flex: 1,
    marginTop: 102,
    alignItems: "center",
    paddingTop: 22,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  photoThumb: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    top: -60,
  },
  svgLogout: { alignSelf: "flex-end" },
});
