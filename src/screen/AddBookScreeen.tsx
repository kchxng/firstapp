import { Text, SafeAreaView, View, StyleSheet, Platform } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import AddFormInput from "../components/AddFormInput";
import { useState } from "react";
import CreateBtn from "../components/CreateBtn";
import { addPost, modifyPost } from "../api/http-client";
import { Book } from "../types/book";
type Props = {
  onClose: any;
  onCreateSuccess: any;
  onSelectedItem: any;
};
export default function AddBookScreeen({
  onClose,
  onCreateSuccess,
  onSelectedItem,
}: Props) {
  const [title, setTitle] = useState(onSelectedItem?.title ?? "");
  const [author, setAuthor] = useState(onSelectedItem?.author ?? "");
  const [emailOfSeller, setEmailOfSeller] = useState(
    onSelectedItem?.email_of_seller ?? ""
  );
  const [price, setPrice] = useState(onSelectedItem?.price ?? "");
  const [coverURL, setCoverURL] = useState(onSelectedItem?.cover ?? "");

  const createPost = () => {
    addPost(
      {
        title: title,
        author: author,
        email_of_seller: emailOfSeller,
        price: price,
        cover: coverURL,
      },
      {
        onSuccess: () => {
          onCreateSuccess();
          onClose();
        },
        onError: (err: any) => console.log(err),
      }
    );
  };

  const updatePost = () => {
    modifyPost(
      {
        title: title,
        author: author,
        email_of_seller: emailOfSeller,
        price: price,
        cover: coverURL,
      },
      {
        onSuccess: () => {
          onCreateSuccess();
          onClose();
        },
        onError: (err: any) => console.log(err),
        id: onSelectedItem?.id,
      }
    );
  };
  const onStore = () => {
    !!onSelectedItem ? updatePost() : createPost();
    onClose();
  };
  return (
    <SafeAreaView style={{ paddingStart: 10, paddingEnd: 10 }}>
      <AntDesign name="closecircleo" size={24} color="red" onPress={onClose} />
      <View style={styles.body}>
        <Text style={styles.title}>Book detail</Text>
        <AddFormInput
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          keyboardType={"default"}
          // otherProps={}
        />
        <AddFormInput
          value={author}
          onChangeText={setAuthor}
          placeholder="Author"
          keyboardType={"default"}
          // otherProps={}
        />
        <AddFormInput
          value={emailOfSeller}
          onChangeText={setEmailOfSeller}
          placeholder="Email of Seller"
          keyboardType={"default"}
          // otherProps={}
        />
        <AddFormInput
          value={price}
          onChangeText={setPrice}
          placeholder="Price"
          keyboardType={"default"}
          // otherProps={}
        />
        <AddFormInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeholder="Cover URL"
          keyboardType={"default"}
          // otherProps={}
        />
        <CreateBtn onSave={onStore} />
      </View>
    </SafeAreaView>
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
});
