import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TextInputProps,
  KeyboardTypeOptions,
} from "react-native";

type Props = {
  value: any;
  onChangeText: (text: any) => void;
  placeholder: string;
  keyboardType: KeyboardTypeOptions | undefined;
  otherProps?: any;
};
export default function AddFormInput({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  ...otherProps
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEEEEE",
    width: "100%",
    height: 40,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 8,
    marginBottom: 20,
  },
});
