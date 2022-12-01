import { rest } from "msw";

export const handlers = [
  // Handles a "GET /auth/session" request
  rest.get("http://localhost/auth/session", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("http://localhost/module/getAllUserModules", (req, res, ctx) => {
    return res(ctx.status(403));
  }),
];
