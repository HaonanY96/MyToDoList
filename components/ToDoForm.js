import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 5,
    fontSize: 16,
  },
});

export default ToDoForm;
