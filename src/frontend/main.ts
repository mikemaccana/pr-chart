import App from "./App.svelte";

import { http } from "./modern-http";
import { StatusCodes } from "./status-codes";

const log = console.log.bind(console);

(async function () {
  let response = await http.get("/api/v1/pull-request-summary");
  if (response.status !== "OK") {
    throw new Error(`Error GETting /api/v1/pull-request-summary`);
  }
  log(response.body);
})();

const app = new App({
  target: document.body,
  props: {
    name: "mike",
    datasets: [
      {
        name: "Dataset 1",
        values: [18, 40, 30, 35, 8, 52, 17, -4],
        chartType: "bar",
      },
      {
        name: "Dataset 2",
        values: [30, 50, -10, 15, 18, 32, 27, 14],
        chartType: "bar",
      },
    ],
  },
});

export default app;
