import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import React, { useState } from "react";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

const Index = () => {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  const addTask = (newTask) => {
    const trimmedTask = newTask.trim();
    if (!trimmedTask) return;

    const isDuplicate = tasks.some(
      (existingTask) => existingTask.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      Alert.alert("Duplicate Task", "This task already exists!", [
        { text: "OK" },
      ]);
    } else {
      setTasks([...tasks, trimmedTask]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ToDoForm addTask={addTask} />
      <ToDoList tasks={tasks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 15,
  },
});

export default Index;
