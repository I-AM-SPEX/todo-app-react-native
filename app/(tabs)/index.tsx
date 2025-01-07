import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";
import { globalStyles } from "@/constants/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Task from "@/components/Task";
const Home = () => {
  const tasks = [
    "Hello i have something to do.",
    "Look get this done",
    "study at six",
    "go buy water",
    "go buy currry",

    "Hello i have something to do.",
    "Look get this done",
    "study at six",
    "go buy water",
    "go buy currry",
  ];
  return (
    <View style={globalStyles.page}>
      <Text style={homeStyle.dateStyle}>Date</Text>
      <View style={homeStyle.listContainer}>
        {tasks.length > 0 ? (
          <FlatList
            data={tasks}
            renderItem={({ item }) => <Task text={item} />}
          />
        ) : (
          <Text>Create a task.</Text>
        )}
      </View>
      <View>
        <Pressable onPress={() => alert("God Loves me")}>
          <FontAwesome name="plus-square-o" size={36} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const homeStyle = StyleSheet.create({
  listContainer: {
    flex: 1,
    width: "100%",
  },
  dateStyle: {
    fontSize: 28,
  },
});

export default Home;
