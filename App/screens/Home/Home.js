import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    flex: 1,
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
    </View>
  );
};
