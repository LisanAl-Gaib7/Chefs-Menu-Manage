import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MenuItem } from "../types";
import { colors, spacing, radius, fontSize } from "../theme";

// Small emoji per course so each card has a bit of visual identity,
// the same way the Part 1 mockup used an image/icon at the top of each card.
const COURSE_EMOJI: Record<string, string> = {
  Starter: "🥗",
  Main: "🍽️",
  Dessert: "🍰",
  Drink: "🥤",
};

interface Props {
  item: MenuItem;
}

export default function MenuItemCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View style={styles.iconCircle}>
          <Text style={styles.icon}>{COURSE_EMOJI[item.course] ?? "🍴"}</Text>
        </View>

        <View style={styles.nameCoursePriceWrapper}>
          <View style={styles.nameRow}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
          </View>
          <Text style={styles.course}>{item.course.toUpperCase()}</Text>
        </View>
      </View>

      <Text style={styles.description} numberOfLines={3}>
        {item.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    // subtle shadow so cards lift off the cream background
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: spacing.sm,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: radius.pill,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.sm,
  },
  icon: {
    fontSize: 22,
  },
  nameCoursePriceWrapper: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: fontSize.subtitle,
    fontWeight: "700",
    color: colors.textDark,
    flexShrink: 1,
    marginRight: spacing.sm,
  },
  price: {
    fontSize: fontSize.price,
    fontWeight: "700",
    color: colors.primary,
  },
  course: {
    fontSize: fontSize.label,
    fontWeight: "600",
    color: colors.primary,
    marginTop: 2,
    letterSpacing: 0.5,
  },
  description: {
    fontSize: fontSize.body,
    color: colors.textMuted,
    lineHeight: 20,
  },
});
