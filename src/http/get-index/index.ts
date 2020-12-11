import { Request, Response } from "../../shared/architect-types";
import { STATUSES, CONTENT_TYPES } from "../../shared/utils";

export async function handler(request: Request): Promise<Response> {
  return {
    statusCode: STATUSES.OK,
    headers: {
      "Content-Type": CONTENT_TYPES.json,
    },
    body: JSON.stringify({ "Welcome to Arc using TypeScript": true }),
  };
}
