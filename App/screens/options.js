import React from "react";
import { SafeAreaView, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { RowItem, RowSeperator } from "../components/RowItem";

export const Options = () => {
  return (
    <SafeAreaView>
      <View>
        <RowItem
          onPress={() => alert("todo")}
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={COLORS.blue} />
          }
        />

        <RowSeperator />

        <RowItem
          onPress={() => alert("todo")}
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={COLORS.blue} />}
        />

        <RowSeperator />

        <RowItem
          onPress={() => alert("todo")}
          text="React Native Tutorials"
          rightIcon={<Entypo name="export" size={20} color={COLORS.blue} />}
        />
      </View>
    </SafeAreaView>
  );
};
