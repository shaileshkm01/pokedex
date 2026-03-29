import { useRouter } from "expo-router";
import { useCallback, useRef, useState } from "react";
import { ActivityIndicator, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { fetchPokemonList, type Pokemon } from "../../../lib/pokeapi";

const LIMIT = 30;

export default function PokedexListScreen() {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const offsetRef = useRef(0);
  const isLoadingRef = useRef(false);

  const loadMore = useCallback(() => {
    if (isLoadingRef.current) return;
    isLoadingRef.current = true;
    setLoading(true);
    fetchPokemonList(LIMIT, offsetRef.current)
      .then((results) => {
        setPokemon((prev) => [...prev, ...results]);
        offsetRef.current += LIMIT;
      })
      .finally(() => {
        isLoadingRef.current = false;
        setLoading(false);
      });
  }, []);

  // load on mount
  useState(() => { loadMore(); });

  if (pokemon.length === 0 && loading) {
    return <ActivityIndicator style={styles.center} />;
  }

  return (
    <FlatList
      data={pokemon}
      keyExtractor={keyExtractor}
      renderItem={({ item, index }) => (
        <Pressable style={styles.row} onPress={() => router.push({ pathname: "/(tabs)/pokedex/[id]", params: { id: String(index + 1) } })}>
          <Text style={styles.number}>#{String(index + 1).padStart(3, "0")}</Text>
          <Text style={styles.name}>{item.name}</Text>
        </Pressable>
      )}
      ItemSeparatorComponent={Separator}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={loading ? <ActivityIndicator style={styles.footer} /> : null}
    />
  );
}

const keyExtractor = (item: Pokemon) => item.name;
const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  center: { flex: 1 },
  footer: { paddingVertical: 16 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  number: { fontSize: 14, color: "#94A3B8", width: 40 },
  name: { fontSize: 16, textTransform: "capitalize" },
  separator: { height: 1, backgroundColor: "#E2E8F0", marginLeft: 16 },
});
