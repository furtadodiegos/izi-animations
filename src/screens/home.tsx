import React from "react";
import { Image, Pressable, StyleSheet, Text } from "react-native";

import type { FC } from "react";
import { AppScreen } from "../components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import ReAnimated from "react-native-reanimated";

const { uri } = Image.resolveAssetSource(require("../assets/preview.jpg"));

const styles = StyleSheet.create({
  styledPressable: {
    margin: 12,
    borderRadius: 24,
    overflow: "hidden",
  },
  styledView: {
    height: 250,
    borderRadius: 24,
    backgroundColor: "rgb(2,0,36)",
    padding: 24,
    justifyContent: "space-around",
  },
  styledTitleView: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  styledSubTitleView: {
    fontSize: 14,
    color: "#FFFFFF",
  },
});

const HomeScreen: FC<
  NativeStackScreenProps<RootStackParamList, "HomeScreen">
> = ({ navigation: { navigate } }) => {
  return (
    <AppScreen>
      <Pressable
        style={styles.styledPressable}
        onPress={() => navigate("ModalScreen")}
      >
        <ReAnimated.Image
          sharedTransitionTag="sharedTag"
          source={{ uri }}
          height={250}
        />
      </Pressable>

      <Pressable
        style={styles.styledPressable}
        onPress={() => navigate("ModalCardScreen")}
      >
        <ReAnimated.View
          sharedTransitionTag="sharedCardTag"
          style={styles.styledView}
        >
          <Text style={styles.styledTitleView}>Card shared tag</Text>

          <Text style={styles.styledSubTitleView}>
            Camada de execução para processamentos. Você pode pensar em um
            thread como um conjunto de instruções a serem executadas pela CPU.
            Um thread é um componente de um processo.
          </Text>
        </ReAnimated.View>
      </Pressable>
    </AppScreen>
  );
};

export default HomeScreen;
