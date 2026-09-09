import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { MenuItem } from "./src/types";
import MenuListScreen from "./src/screens/MenuListScreen";
import AddMenuItemScreen from "./src/screens/AddMenuItemScreen";

// Which screen is currently on top. Kept simple with plain state instead
// of a navigation library, since Part 2 only needs two screens: the menu
// list (home) and the add-item form (see Question 3's flow diagram).
type Screen = "list" | "add";

export default function App() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [screen, setScreen] = useState<Screen>("list");

  function handleAddItem(newItem: Omit<MenuItem, "id">) {
    const itemWithId: MenuItem = {
      ...newItem,
      // Simple unique id: timestamp + a random suffix.
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    };
    // Adding to the front so the newest dish appears at the top of the list,
    // giving the chef instant visual confirmation that it was added.
    setItems((current) => [itemWithId, ...current]);
  }

  return (
    <>
      <StatusBar style="dark" />
      {screen === "list" ? (
        <MenuListScreen items={items} onAddPress={() => setScreen("add")} />
      ) : (
        <AddMenuItemScreen
          onSave={handleAddItem}
          onCancel={() => setScreen("list")}
        />
      )}
    </>
  );
}
