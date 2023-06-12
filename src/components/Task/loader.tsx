import React from "react";
import { Text, View } from "react-native";
import { AiOutlineLoading3Quarters, AiOutlineLoading } from "react-icons/ai";

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
      <AiOutlineLoading3Quarters color="white" size={50} />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginTop: "1rem",
          color: "white",
        }}
      >
        Hi There
      </Text>
    </View>
  );
};

export default Loader;
