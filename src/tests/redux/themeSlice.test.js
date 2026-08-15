import { test, expect } from "vitest";

import reducer, {
  toggleTheme,
} from "../../redux/slices/themeSlice";

test("toggles light to dark", () => {
  const state = {
    mode: "light",
  };

  const next = reducer(
    state,
    toggleTheme()
  );

  expect(next.mode).toBe("dark");
});

test("toggles dark to light", () => {
  const state = {
    mode: "dark",
  };

  const next = reducer(
    state,
    toggleTheme()
  );

  expect(next.mode).toBe("light");
});