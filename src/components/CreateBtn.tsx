import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";

export default function CreateBtn({ onSave }: { onSave: any }) {
  return (
    <TouchableOpacity onPress={onSave} style={styles.container}>
      <Text style={styles.title}>Save</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1273DE",
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
