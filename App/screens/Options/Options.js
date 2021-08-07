import React from "react";
import { Alert, Linking, SafeAreaView, ScrollView, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { RowItem, RowSeperator } from "../../components/RowItem";

export const Options = () => {
  const openUrl = (url) => {
    Linking.openURL(url).catch(() => {
      Alert.alert("Sorry, something went wrong.", "Please try again later.");
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <RowItem
            text="Themes"
            rightIcon={
              <Entypo name="chevron-right" size={20} color={COLORS.blue} />
            }
          />

          <RowSeperator />

          <RowItem
            onPress={() => openUrl("https://learn.handlebarlabs.com")}
            text="React Native Basics"
            rightIcon={<Entypo name="export" size={20} color={COLORS.blue} />}
          />

          <RowSeperator />

          <RowItem
            onPress={() => openUrl("https://reactnativebyexample.com")}
            text="React Native by Example"
            rightIcon={<Entypo name="export" size={20} color={COLORS.blue} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
