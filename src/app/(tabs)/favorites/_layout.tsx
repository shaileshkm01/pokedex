import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function FavoritesStackLayout() {
  const isDark = useColorScheme() === "dark";
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Favorites",
          headerStyle: { backgroundColor: isDark ? "#1C0A00" : "#E3350D" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "700" },
        }}
      />
    </Stack>
  );
}
