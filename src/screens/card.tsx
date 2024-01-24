import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import ReAnimated, { FadeInLeft } from "react-native-reanimated";

import type { FC } from "react";
import { AppScreen } from "../components";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";

const styles = StyleSheet.create({
  styledView: {
    height: Dimensions.get("screen").height,
    borderRadius: 0,
    backgroundColor: "rgb(2,0,36)",
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

const ModalCardScreen: FC<
  NativeStackScreenProps<RootStackParamList, "ModalCardScreen">
> = ({ navigation: { goBack } }) => {
  return (
    <AppScreen>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => goBack()}>
        <ReAnimated.View
          sharedTransitionTag="sharedCardTag"
          style={styles.styledView}
        />
      </TouchableOpacity>
    </AppScreen>
  );
};

export default ModalCardScreen;
