import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Book } from "../types/book";

export interface book {
  title: string;
  author: string;
  price: number;
  imgUrl: string;
  onEditItem: any;
  onDeleteItem: any;
}
const BookCard = (props: book) => {
  return (
    <View style={styles.container}>
      {/* Image Section */}
      <Image
        source={{
          uri:
            props.imgUrl ??
            `https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg`,
        }}
        style={styles.imgCover}
      />

      {/* Detail Section */}
      <View style={styles.detailContainer}>
        <Text style={styles.titleName}>
          {props.title ?? "Book for englsih speaking 2025"}
        </Text>
        <Text style={styles.titleAuthor}>{props.author ?? "John Jet"}</Text>
        <Text style={styles.price}>
          ${new Intl.NumberFormat("en-US").format(props.price)}
        </Text>
      </View>

      {/* Edit and Delete Option */}
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.btnCircle} onPress={props.onEditItem}>
          <AntDesign name="edit" size={24} color="#25a" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCircle}>
          <MaterialIcons
            name="delete-outline"
            size={24}
            color="red"
            onPress={props.onDeleteItem}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: Platform.OS === "ios" ? "#fdf6e4" : "#fdfd",
    // alignItems: "center",
    // justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 10,
  },
  titleName: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "bold",
  },
  titleAuthor: {
    color: "#888",
    fontSize: 14,
  },
  price: {
    color: "#25a",
    fontSize: 16,
    fontWeight: "bold",
  },
  imgCover: {
    height: 120,
    width: "25%",
    borderRadius: 8,
    resizeMode: "stretch",
  },
  detailContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnCircle: {
    height: 35,
    width: 35,
    borderRadius: 20,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginStart: 10,
  },
});

export default BookCard;
