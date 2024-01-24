import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";
import type { FC, PropsWithChildren } from "react";

const { styledSafeAreaView } = StyleSheet.create({
  styledSafeAreaView: {
    flex: 1,
  },
});

const AppScreen: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  children,
  ...rest
}) => {
  return (
    <SafeAreaView style={styledSafeAreaView} {...rest}>
      {children}
    </SafeAreaView>
  );
};

export default AppScreen;
