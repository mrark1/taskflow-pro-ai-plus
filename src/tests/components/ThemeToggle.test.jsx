import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import ThemeToggle from "../../components/ThemeToggle/ThemeToggle";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";

test("theme button exists", async () => {
  render(
    <Provider store={store}>
      <ThemeToggle />
    </Provider>
  );

  const button = screen.getByRole("button");

  await userEvent.click(button);

  expect(button).toBeInTheDocument();
});