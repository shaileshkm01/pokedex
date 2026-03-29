import { Stack } from "expo-router";

export default function PokedexStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Pokedex" }} />
      <Stack.Screen name="[id]" options={{ title: "Pokémon" }} />
    </Stack>
  );
}
