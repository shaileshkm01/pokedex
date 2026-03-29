import { Stack } from "expo-router";
import { Platform, useColorScheme } from "react-native";

const headerStyle = (isDark: boolean) => ({
  headerStyle: { backgroundColor: isDark ? "#1C0A00" : "#E3350D" },
  headerTintColor: "#FFFFFF",
  headerTitleStyle: { fontWeight: "700" as const },
});

export default function PokedexStackLayout() {
  const isDark = useColorScheme() === "dark";
  const hs = headerStyle(isDark);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pokédex", ...hs }} />
      <Stack.Screen name="[id]" options={{ title: "Pokémon", ...hs }} />
    </Stack>
  );
}
