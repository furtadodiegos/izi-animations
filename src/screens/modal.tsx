import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";

import type { FC } from "react";
import { AppScreen } from "../components";
import { BlurView } from "expo-blur";
import { RootStackParamList } from "../router";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ReAnimated, { FadeInLeft } from "react-native-reanimated";

const { uri } = Image.resolveAssetSource(require("../assets/preview.jpg"));

const ModalScreen: FC<
  NativeStackScreenProps<RootStackParamList, "ModalScreen">
> = ({ navigation: { goBack } }) => {
  return (
    <AppScreen>
      <TouchableOpacity onPress={() => goBack()} style={{ flex: 1 }}>
        <BlurView intensity={40} style={{ flex: 1 }} tint="dark">
          <ReAnimated.Image
            sharedTransitionTag="sharedTag"
            source={{ uri }}
            height={250}
          />

          <ReAnimated.Text entering={FadeInLeft.duration(400).delay(500)}>
            ModalScreen
          </ReAnimated.Text>
        </BlurView>
      </TouchableOpacity>
    </AppScreen>
  );
};

export default ModalScreen;
