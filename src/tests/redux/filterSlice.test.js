import { test, expect } from "vitest";

import reducer,{
    setSearch,
    setPriority,
} from "../../redux/slices/filterSlice";

test("sets search", () => {
  const state = {
    search: "",
    priority: "All",
    status: "All",
  };

  const next = reducer(
    state,
    setSearch("React")
  );

  expect(next.search).toBe("React");
});

test("sets priority", () => {
  const state = {
    search: "",
    priority: "All",
    status: "All",
  };

  const next = reducer(
    state,
    setPriority("High")
  );

  expect(next.priority).toBe("High");
});