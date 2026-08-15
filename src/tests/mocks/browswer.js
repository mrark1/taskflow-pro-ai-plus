import { render, screen } from "@testing-library/react";

test("loads mocked task", async () => {

  render(<Dashboard />);

  expect(

    await screen.findByText(
      /Redux Testing/
    )

  ).toBeInTheDocument();

});