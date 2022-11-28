import { rest } from "msw";

export const handlers = [
  // Handles a "GET /user" request
  rest.get("/auth/session", (req, res, ctx) => {
    return res(ctx.status(403));
  }),

  rest.get("/module/getAllUserModules", (req, res, ctx) => {
    return res(ctx.status(403));
  }),
];
