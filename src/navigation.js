import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import ParentDashboard from "./screens/ParentDashboard";
import ChildHome from "./screens/ChildHome";

const Stack = createStackNavigator();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ParentDashboard" component={ParentDashboard} />
      <Stack.Screen name="ChildHome" component={ChildHome} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
