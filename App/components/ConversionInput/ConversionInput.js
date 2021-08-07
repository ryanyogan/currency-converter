import React, { useState } from "react";
import {
  ProgressViewIOSComponent,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
  },
  button: {
    padding: 15,
    borderRightColor: COLORS.border,
    borderRightWidth: 1,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.blue,
    fontWeight: "bold",
  },
  input: {
    flex: 1,
    padding: 10,
    color: COLORS.textLight,
  },
});

export const ConversionInput = ({ text, onButtonPress, ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};
