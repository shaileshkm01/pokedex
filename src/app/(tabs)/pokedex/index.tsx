import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PokedexListScreen() {
  return (
    <View style={styles.container}>
      <Link
        href={{ pathname: "/(tabs)/pokedex/[id]", params: { id: "1" } }}
        asChild
      >
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Open details (example)</Text>
        </Pressable>
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
  link: {
    padding: 12,
  },
  linkText: {
    fontSize: 16,
    color: "#208AEF",
  },
});
