import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const trimmedTask = newTask?.trim();

    if (!trimmedTask) {
      Alert.alert("Empty Task", "Please enter a task before adding.", [
        { text: "OK" },
      ]);
      return;
    }

    const isDuplicate = tasks.some(
      (existingTask) => existingTask.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) {
      Alert.alert("Duplicate Task", "This task already exists!", [
        { text: "OK" },
      ]);
      return;
    }

    setTasks((prevTasks) => [...prevTasks, trimmedTask]);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={addTask} />
        <View style={styles.buttonContainer}>
          <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
          />
        </View>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 20,
  },
  aboutButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  aboutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
