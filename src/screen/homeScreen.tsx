import {
  ActivityIndicator,
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import BookCard from "../components/BookCard";
import { useEffect, useState } from "react";
import { deletePost, getAll, modifyPost } from "../api/http-client";
import { Book } from "../types/book";
import AddBook from "../components/AddBook";
import AddBookScreeen from "./AddBookScreeen";

export default function HomeScreen() {
  const [dataList, setDataList] = useState<Book[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAll = () => {
    getAll({
      onSuccess: (data: Book[]) => {
        setDataList(data);
        setLoading(false);
      },
      onError: (err: any) => {
        console.log(err);
        setLoading(false);
      },
    });
  };
  useEffect(() => {
    fetchAll();
  }, []);
  console.log("===========================================");
  console.log(JSON.stringify(dataList, null, 3));
  console.log("===========================================");

  const onHandleModify = (item: any) => {
    setModalVisible(true);
    setSelectedItem(item);
    console.log(JSON.stringify(item, null, 3));
    // modifyPost({
    //   onSuccess: () => fetchAll(),
    //   onError: (err: any) => console.log(err),
    //   id: item.id,
    // });
  };

  const onHandleDelete = (item: any) => {
    console.log(item);
    deletePost({
      onSuccess: () => fetchAll(),
      onError: (err: any) => console.log(err),
      id: item?.id,
    });
  };
  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BookCard title={"Book-1"} price={200} /> */}
      <FlatList
        data={dataList}
        keyExtractor={(v) => v.id.toString()}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            price={item.price}
            imgUrl={item.cover}
            onEditItem={() => onHandleModify(item)}
            onDeleteItem={() => onHandleDelete(item)}
          />
        )}
        ListEmptyComponent={
          <View style={{ marginTop: 20, alignItems: "center" }}>
            <Text>No books available.</Text>
          </View>
        }
        contentContainerStyle={{ paddingVertical: 16 }}
      />
      <AddBook
        onOpen={() => {
          setSelectedItem({});
          setModalVisible(true);
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreeen
          onClose={() => setModalVisible(false)}
          onCreateSuccess={() => fetchAll()}
          onSelectedItem={selectedItem}
        />
      </Modal>
    </SafeAreaView>
  );
}
