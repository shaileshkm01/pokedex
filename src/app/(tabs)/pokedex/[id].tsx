import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function PokemonDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokémon</Text>
      <Text style={styles.id}>#{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  id: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.8,
  },
});
