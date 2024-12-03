import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

const Stack = createStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
};

export default Index;
