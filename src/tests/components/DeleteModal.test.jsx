import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, test, expect } from "vitest";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

test("calls onConfirm when Delete button is clicked", async () => {
  const onConfirm = vi.fn();
  const onClose = vi.fn();

  render(
    <DeleteModal
      open={true}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );

  const deleteButton = screen.getByRole("button", {
    name: /^delete$/i,
  });

  await userEvent.click(deleteButton);

  expect(onConfirm).toHaveBeenCalledTimes(1);
});

test("does not render when open is false", () => {
  render(
    <DeleteModal
      open={false}
      onClose={vi.fn()}
      onConfirm={vi.fn()}
    />
  );

  expect(screen.queryByText(/Delete Task/i)).not.toBeInTheDocument();
});