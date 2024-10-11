import { View } from "react-native";
import React from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

const Index = () => {
  return (
    <View>
      <ToDoList />
      <ToDoForm />
    </View>
  );
};

export default Index;
