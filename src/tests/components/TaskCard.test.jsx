import { render, screen } from "@testing-library/react";
import TaskCard from "../../components/TaskCard/TaskCard";
test("renders task title", () => {

  render(

    <TaskCard

      task={{

        id:1,
        title:"Sprint 11",

        description:"Testing",

        priority:"High",

        status:"To Do"

      }}

    />

  );

  expect(

    screen.getByText("Sprint 11")

  ).toBeInTheDocument();

});