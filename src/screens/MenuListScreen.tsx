import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { MenuItem } from "../types";
import MenuItemCard from "../components/MenuItemCard";
import EmptyState from "../components/EmptyState";
import { colors, spacing, radius, fontSize } from "../theme";

interface Props {
  items: MenuItem[];
  onAddPress: () => void;
}

// This is the "Menu list screen" from the Part 1 flow diagram (Question 3):
// the home screen that shows every dish, and the entry point to "Add menu item".
export default function MenuListScreen({ items, onAddPress }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>🍴 Menu</Text>

        <TouchableOpacity
          style={styles.addButton}
          onPress={onAddPress}
          accessibilityLabel="Add a new menu item"
          accessibilityRole="button"
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.countLabel}>
        {items.length} {items.length === 1 ? "item" : "items"} on the menu
      </Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemCard item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  title: {
    fontSize: fontSize.title,
    fontWeight: "700",
    color: colors.textDark,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: radius.pill,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "700",
    marginTop: -2,
  },
  countLabel: {
    fontSize: fontSize.label,
    color: colors.textMuted,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xs,
    marginBottom: spacing.sm,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    flexGrow: 1,
  },
});
