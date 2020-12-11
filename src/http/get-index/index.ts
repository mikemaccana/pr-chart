import { Request, Response } from "../../shared/architect-types";
import { STATUSES, CONTENT_TYPES, stringify, log } from "../../shared/utils";

const html = `<!doctype html>
<html lang=en>
<head>
  <meta charset=utf-8>
  <title>PR summary</title>
</head>
<body>
  <p>I'm the content</p>
</body>
</html>`;

export async function handler(request: Request): Promise<Response> {
  return {
    statusCode: STATUSES.OK,
    headers: {
      "Content-Type": CONTENT_TYPES.html,
    },
    body: html,
  };
}
