import { Stack } from "expo-router/stack";
import {} from "effect";

export default function RootLayout() {
  // const sampleApi =
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
