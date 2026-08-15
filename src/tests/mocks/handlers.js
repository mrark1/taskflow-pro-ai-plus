import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/tasks", () => {
    return HttpResponse.json({
      tasks: [
        {
          id: 1,
          title: "Redux Testing",
          status: "Completed",
        },
      ],
    });
  }),
];