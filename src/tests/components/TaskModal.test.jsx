import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";

import TaskModal from "../../components/TaskModal/TaskModal";
test("modal save button works", async () => {
  const onSave = vi.fn();

  render(
    <TaskModal
      open={true}
      onClose={() => {}}
      onSave={onSave}
    />
  );

  await userEvent.type(
    screen.getByPlaceholderText("Task Title"),
    "Learn Vitest"
  );

  expect(
    screen.getByDisplayValue("Learn Vitest")
  ).toBeInTheDocument();
});