import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";
import SearchBar from "../../components/SearchBar/SearchBar";

test("updates search input", async () => {
  const onChange = vi.fn();

  render(
    <SearchBar
      value=""
      onChange={onChange}
    />
  );

  const input = screen.getByPlaceholderText(/search tasks/i);

  await userEvent.type(input, "React");

  expect(onChange).toHaveBeenCalled();
});