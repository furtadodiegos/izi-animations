import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeScreen, ModalCardScreen, ModalScreen } from "../screens";

export type RootStackParamList = {
  HomeScreen: undefined;
  ModalScreen: undefined;
  ModalCardScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />

        <Stack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{
            headerShown: false,
            presentation: "transparentModal",
            animation: "fade",
          }}
        />

        <Stack.Screen
          name="ModalCardScreen"
          component={ModalCardScreen}
          options={{
            headerShown: false,
            presentation: "fullScreenModal",
            animation: "simple_push",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
