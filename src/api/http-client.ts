import axios from "axios";
import { Alert } from "react-native";
import { endpointURL } from "../utils/constants";
import { BookRequest } from "../types/book";

type Props = {
  onSuccess: any;
  onError: any;
};
export const getAll = async ({ onSuccess, onError }: Props) => {
  //CallBack
  try {
    const res = await axios.get(endpointURL);
    console.log(JSON.stringify(res.data, null, 3));
    // setData(res.data);
    onSuccess && onSuccess(res.data);
  } catch (err) {
    onError && onError(err);
    console.log("An error occured: ", err);
  }
};
export const getSingle = async ({ onSuccess, onError }: Props) => {
  try {
    const res = await axios.get(`${endpointURL}/1`);
    console.log(JSON.stringify(res.data, null, 3));
    onSuccess && onSuccess(res.data);
  } catch (err) {
    onError && onError(err);
    console.log("An error occured: ", err);
  }
};

export const addPost = async (
  data: BookRequest,
  { onSuccess, onError }: Props
) => {
  try {
    const res = await axios.post<any>(`${endpointURL}`, {
      title: data.title,
      author: data.author,
      cover: data.cover,
      email_of_seller: data.email_of_seller,
      price: data.price,
    });
    Alert.alert("Store data success.");
    onSuccess && onSuccess(res.data);
  } catch (err) {
    onError && onError(err);
    console.log("An error occurred: ", err);
    Alert.alert("Something went wrong!!");
  }
};

export const modifyPost = async (
  data: BookRequest,
  {
    onSuccess,
    onError,
    id,
  }: {
    onSuccess: any;
    onError: any;
    id: string;
  }
) => {
  try {
    const res = await axios.put(`${endpointURL}/${id}`, {
      title: data.title,
      author: data.author,
      cover: data.cover,
      email_of_seller: data.email_of_seller,
      price: data.price,
    });
    Alert.alert("Modify data success.");
    onSuccess && onSuccess(res.data);
  } catch (err) {
    onError && onError(err);
    console.log("An error occurred: ", err);
    Alert.alert("Something went wrong!!");
  }
};

export const deletePost = async ({
  onSuccess,
  onError,
  id,
}: {
  onSuccess: any;
  onError: any;
  id: string;
}) => {
  try {
    const res = await axios.delete(`${endpointURL}/${id}`);
    Alert.alert("Delete data success.");
    onSuccess && onSuccess(res.data);
  } catch (err) {
    onError && onError(err);
    console.log("An error occurred: ", err);
    Alert.alert("Something went wrong!!");
  }
};
