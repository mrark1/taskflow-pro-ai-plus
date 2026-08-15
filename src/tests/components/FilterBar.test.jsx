import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, test, expect } from "vitest";
import FilterBar from "../../components/FilterBar/FilterBar";

test("changes priority filter", async () => {
  const onPriority = vi.fn();

  render(
    <FilterBar
      priority="All"
      status="All"
      onPriorityChange={onPriority}
      onStatusChange={vi.fn()}
    />
  );

  const selects = screen.getAllByRole("combobox");

  await userEvent.selectOptions(selects[0], "High");

  expect(onPriority).toHaveBeenCalled();
});