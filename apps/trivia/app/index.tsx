import { Link, Stack } from "expo-router";
import { Image, Text, View, StyleSheet, StatusBar } from "react-native";
import "./global.css";
import React from "react";

function LogoTitle() {
  return (
    <Image
      style={styles.image}
      source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
    />
  );
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My home",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          headerTitle: (props) => <LogoTitle {...props} />,
        }}
      />
      <View className="flex-1 justify-center items-center bg-white">
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Text>Home Screen</Text>
      <Link href={{ pathname: "details", params: { name: "Bacon" } }}>
        Go to Details
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
  },
});
