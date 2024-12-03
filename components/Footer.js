import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>© 2023 MyToDoList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    alignItems: "center",
  },
  text: {
    color: "#666",
    fontSize: 12,
  },
});

export default Footer;
