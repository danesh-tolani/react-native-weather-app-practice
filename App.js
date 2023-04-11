import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text>6</Text>
        <Text>Feel like 5</Text>
        <Text>Hight: 8</Text>
        <Text>Low: 6</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    flex: 1,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
  },
});

export default App;
