import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Options } from "../../screens";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export const Navigation = () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
