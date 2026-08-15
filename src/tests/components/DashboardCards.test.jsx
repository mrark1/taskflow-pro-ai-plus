import { render, screen } from "@testing-library/react";
import DashboardCards from "../../components/DashboardCards/DashboardCards";

test("renders dashboard statistics", () => {

  render(<DashboardCards />);

  expect(
    screen.getByText("Total Tasks")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Completed")
  ).toBeInTheDocument();

});