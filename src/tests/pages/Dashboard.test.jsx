import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { test, expect } from "vitest";

import Dashboard from "../../pages/Dashboard/Dashboard";
import { store } from "../../redux/store";

test("renders dashboard page", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </Provider>
  );

  expect(
    screen.getByText(/welcome/i)
  ).toBeInTheDocument();
});