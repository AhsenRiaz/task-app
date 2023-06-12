import { StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Loader from "./src/components/Task/loader";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      {loading ? <Loader /> : <Home />}
    </>
  );
}
