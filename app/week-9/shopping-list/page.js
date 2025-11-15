"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  // 🔥 BLOCK PAGE if user is not logged in
  useEffect(() => {
    if (user === null) {
      router.push("/week-9"); // landing page
    }
  }, [user, router]);

  // If user not loaded yet → return nothing (prevents flash)
  if (user === undefined) return null;

  function handleItemSelect(item) {
    const cleanName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s]/gu, "");
    setSelectedItemName(cleanName);
  }

  function handleLogout() {
    firebaseSignOut().then(() => router.push("/week-9"));
  }

  return (
    <main className="flex py-4">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="font-bold mb-4 text-2xl">
          Shopping List + Meal Ideas
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-6">
            <div className="p-4 rounded-sm border border-gray-300">
              <NewItem />
            </div>

            <div className="space-y-6">
              <ItemList onItemSelect={handleItemSelect} />
            </div>
          </div>

          <div>
            <div className="p-4 rounded">
              <MealIdeas ingredient={selectedItemName} />
            </div>
          </div>
        </div>

        {/* LOGOUT BUTTON */}
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}