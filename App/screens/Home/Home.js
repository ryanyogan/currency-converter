import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions } from "react-native";
import { ConversionInput } from "../../components/ConversionInput/ConversionInput";
import { COLORS } from "../../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
});

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoBackground}
          source={require("../../assets/images/background.png")}
          resizeMode="contain"
        />
        <Image
          style={styles.logo}
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
        />
      </View>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo")}
      />
    </View>
  );
};
