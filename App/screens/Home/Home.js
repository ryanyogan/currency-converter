import { format } from "date-fns";
import React from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { COLORS } from "../../constants/colors";
import { Button, ConversionInput } from "../../components";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 10,
  },
});

export const Home = () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor={COLORS.blue} barStyle="light-content" />
        <View style={styles.content}>
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

          <Text style={styles.textHeader}>Currency Converter</Text>

          <ConversionInput
            text={baseCurrency}
            value="123"
            onButtonPress={() => alert("todo")}
            onChangeText={(text) => console.log("text", text)}
            keyboardType="numeric"
          />
          <ConversionInput
            text={quoteCurrency}
            value="123"
            editable={false}
            onButtonPress={() => alert("todo")}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              date,
              "MMMM do, yyyy"
            )}.`}
          </Text>

          <Button text="Reverse Currencies" onPress={() => alert("todo")} />

          <View style={{ height: screen.height }} />
        </View>
      </ScrollView>
    </View>
  );
};
