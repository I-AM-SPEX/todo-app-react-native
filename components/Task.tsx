import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";
const Task = ({ text }) => {
  const [edit, setEdit] = useState(false);
  const [inputText, setInputText] = useState(text);
  console.log(inputText);
  console.log("above is the bug");
  return (
    <View style={taskStyle.container}>
      {edit ? (
        <TextInput
          style={taskStyle.textContainer}
          editable
          multiline
          numberOfLines={3}
          defaultValue={inputText}
          onChangeText={(newText) => setInputText(newText)}
        />
      ) : (
        <Text style={taskStyle.text}>{inputText}</Text>
      )}
      <View style={taskStyle.featureContainer}>
        <FontAwesome name="check" size={24} color="black" />
        <Pressable onPress={() => setEdit(!edit)}>
          <FontAwesome name="edit" size={24} color="black" />
        </Pressable>
        <FontAwesome6 name="xmark" size={24} color="black" />
      </View>
    </View>
  );
};

const taskStyle = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "borderColor",
    height: 100,
    justifyContent: "space-between",
    padding: 12,
    marginBottom: 8,
  },

  textContainer: {
    height: "64%",
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 4,
  },
  text: {
    fontSize: 18,
  },

  featureContainer: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

export default Task;
