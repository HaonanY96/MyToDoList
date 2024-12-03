import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.title}>My Todo List App</Text>
        <Text style={styles.text}>Created by: Haonan Ye</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
