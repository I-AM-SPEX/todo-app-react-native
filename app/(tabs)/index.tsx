import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { globalStyles } from "@/constants/styles/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const Home = () => {
  return (
    <View style={globalStyles.page}>
      <Text style={homeStyle.dateStyle}>Date</Text>
      <View style={homeStyle.listContainer}>
        <Text>List</Text>
      </View>
      <View>
        <Pressable onPress={() => alert("God Loves me")}>
          <FontAwesome name="plus-square-o" size={32} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

const homeStyle = StyleSheet.create({
  listContainer: {
    borderColor: "black",
    borderWidth: 2,
    flex: 1,
  },
  dateStyle: {
    fontSize: 28,
  },
});

export default Home;
