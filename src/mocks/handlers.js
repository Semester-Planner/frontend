import { rest } from "msw";

export const handlers = [
  // Handles a "GET /auth/session" request
  rest.get("http://localhost:3001/auth/session", (req, res, ctx) => {
    console.log("hehehehehhe");
    return res(ctx.status(200));
  }),

  rest.get(
    "http://localhost:3001/module/getAllUserModules",
    (req, res, ctx) => {
      console.log("hehehehehhe");
      return res(ctx.status(403));
    }
  ),
];
