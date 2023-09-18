import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  FlatList,
} from "react-native";
import SvgLogout from "../components/SvgLogout";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

export default function ProfileScreen() {
  const data = useSelector((state) => state.main);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/rockbg.jpg")}
        style={styles.bg}
        resizeMode="cover"
      />
      <View style={styles.postsContainer}>
        <View style={styles.photoThumb}>
          <ImageBackground
            source={require("../assets/avatar.webp")}
            style={{ flex: 1 }}
            resizeMode="cover"
          />
        </View>
        <SvgLogout style={styles.svgLogout} />
        <Text style={styles.title}>ProfileScreen</Text>
        {data.posts.length > 0 && (
          <View style={styles.listWrapper}>
            <FlatList
              data={data.posts}
              renderItem={({ item }) => <PostCard info={item.data} />}
              keyExtractor={(item) => item.id}
            />
          </View>
        )}
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
  listWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  photoThumb: {
    position: "absolute",
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    width: 120,
    height: 120,
    top: -60,
    overflow: "hidden",
  },
  svgLogout: { alignSelf: "flex-end" },
});
