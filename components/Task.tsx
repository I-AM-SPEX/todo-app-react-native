import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FontAwesome6 } from "@expo/vector-icons";
const Task = () => {
  const [edit, setEdit] = useState(false);
  return (
    <View style={taskStyle.container}>
      {edit ? (
        <TextInput />
      ) : (
        <Text style={taskStyle.text}>God is love and God is merciful</Text>
      )}
      <View style={taskStyle.featureCotainfer}>
        <FontAwesome name="check" size={26} color="black" />
        <FontAwesome name="edit" size={26} color="black" />
        <FontAwesome6 name="xmark" size={26} color="black" />
      </View>
    </View>
  );
};

const taskStyle = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "borderColor",
    height: 100,
    justifyContent: "space-between",
    padding: 4,
  },

  textContainer: {
    width: "50%",
  },
  text: {
    fontSize: 18,
  },

  featureCotainfer: {
    width: "30%",
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "black",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
});

export default Task;
