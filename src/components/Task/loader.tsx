import React from "react";
import { Text, View } from "react-native";

const Loader = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#1f1e25",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Hi there...
      </Text>
    </View>
  );
};

export default Loader;
