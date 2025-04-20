import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function AddBook({ onOpen }: { onOpen: any }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onOpen}>
      <AntDesign name="plus" size={32} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    backgroundColor: "#1273DE",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: Platform.OS === "android" ? 30 : 0,
  },
});
