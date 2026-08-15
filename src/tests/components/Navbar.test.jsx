import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Navbar from "../../components/Navbar/Navbar";
import { test, expect } from "vitest";

test("renders application logo", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    </Provider>
  );

  expect(screen.getByText(/TaskFlow/i)).toBeInTheDocument();
});