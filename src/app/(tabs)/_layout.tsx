import { NativeTabs } from "expo-router/unstable-native-tabs";
import {
  DynamicColorIOS,
  Platform,
  useColorScheme,
} from "react-native";

export default function TabLayout() {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";

  const tintColor =
    Platform.OS === "ios"
      ? DynamicColorIOS({
          light: "#208AEF",
          dark: "#38BDF8",
        })
      : isDark
        ? "#38BDF8"
        : "#208AEF";

  const labelColor =
    Platform.OS === "ios"
      ? DynamicColorIOS({
          light: "#64748B",
          dark: "#94A3B8",
        })
      : isDark
        ? "#94A3B8"
        : "#64748B";

  return (
    <NativeTabs
      tintColor={tintColor}
      iconColor={{
        default: labelColor,
        selected: tintColor,
      }}
      blurEffect="systemChromeMaterial"
      shadowColor={
        Platform.OS === "ios"
          ? DynamicColorIOS({
              light: "rgba(15, 23, 42, 0.12)",
              dark: "rgba(0, 0, 0, 0.45)",
            })
          : undefined
      }
      labelStyle={{ color: labelColor }}
      rippleColor="rgba(32, 138, 239, 0.18)"
      indicatorColor={tintColor}
    >
      <NativeTabs.Trigger name="pokedex">
        <NativeTabs.Trigger.Label>Pokedex</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...(Platform.OS === "ios"
            ? {
                sf: { default: "book", selected: "book.fill" },
              }
            : { md: "menu_book" })}
        />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="favorites">
        <NativeTabs.Trigger.Label>Favorites</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          {...(Platform.OS === "ios"
            ? {
                sf: { default: "heart", selected: "heart.fill" },
              }
            : { md: "favorite" })}
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
