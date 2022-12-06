import { rest } from "msw";

export const handlers = [
  // GET requests
  rest.get("http://localhost/auth/session", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("http://localhost/module/getAllUserModules", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "5a437f87-1bc2-417b-95c7-403f26743235",
          name: "Composition",
          mod_code: "ID_01_v2",
          department: "ID",
          coordinator: "Martin Knobel",
          UserModule: {
            id: "11abdc51-951e-44a6-9efd-c809890b7172",
            moduleId: "5a437f87-1bc2-417b-95c7-403f26743235",
            userId: "917a4811-3d57-4a02-b635-a42e5fcdb751",
          },
        },
        {
          id: "3e972210-7d06-483b-aeb0-0836627a6df4",
          name: "Teamwork and Collaboration",
          mod_code: "IS_01_v2",
          department: "IS",
          coordinator: "Britte Loeckel",
          UserModule: {
            id: "db84e007-6927-4e16-973e-e9ae01d6a23a",
            moduleId: "3e972210-7d06-483b-aeb0-0836627a6df4",
            userId: "917a4811-3d57-4a02-b635-a42e5fcdb751",
          },
        },
        {
          id: "b893c61b-9d7e-421e-a35e-2517c802665b",
          name: "Leadership",
          mod_code: "IS_02_v2",
          department: "IS",
          coordinator: "Britte Loeckel",
          UserModule: {
            id: "989221ae-387d-4803-b298-8141128d49a1",
            moduleId: "b893c61b-9d7e-421e-a35e-2517c802665b",
            userId: "917a4811-3d57-4a02-b635-a42e5fcdb751",
          },
        },
        {
          id: "8b3b01be-82af-4664-bcb0-0e8ac58ad5d3",
          name: "Creative Problem-Solving",
          mod_code: "IS_03_v2",
          department: "IS",
          coordinator: "Martin Knobel",
          UserModule: {
            id: "d6296661-c27f-4e70-b3ca-1d61d8475f7a",
            moduleId: "8b3b01be-82af-4664-bcb0-0e8ac58ad5d3",
            userId: "917a4811-3d57-4a02-b635-a42e5fcdb751",
          },
        },
        {
          id: "179e00dd-0ef5-4f87-886f-b76c94482a6b",
          name: "Self-Directed (Curiosity-Driven) Learning",
          mod_code: "IS_04_v2",
          department: "IS",
          coordinator: "Adam Roe",
          UserModule: {
            id: "28aa31ca-4333-460e-9a38-fea76bd7547c",
            moduleId: "179e00dd-0ef5-4f87-886f-b76c94482a6b",
            userId: "917a4811-3d57-4a02-b635-a42e5fcdb751",
          },
        },
      ])
    );
  }),

  rest.get("http://localhost/module/getAllModules", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: "5a437f87-1bc2-417b-95c7-403f26743235",
          name: "Composition",
          mod_code: "ID_01_v2",
          department: "ID",
          coordinator: "Martin Knobel",
        },
        {
          id: "3e972210-7d06-483b-aeb0-0836627a6df4",
          name: "Teamwork and Collaboration",
          mod_code: "IS_01_v2",
          department: "IS",
          coordinator: "Britte Loeckel",
        },
        {
          id: "b893c61b-9d7e-421e-a35e-2517c802665b",
          name: "Leadership",
          mod_code: "IS_02_v2",
          department: "IS",
          coordinator: "Britte Loeckel",
        },
        {
          id: "8b3b01be-82af-4664-bcb0-0e8ac58ad5d3",
          name: "Creative Problem-Solving",
          mod_code: "IS_03_v2",
          department: "IS",
          coordinator: "Martin Knobel",
        },
        {
          id: "179e00dd-0ef5-4f87-886f-b76c94482a6b",
          name: "Self-Directed (Curiosity-Driven) Learning",
          mod_code: "IS_04_v2",
          department: "IS",
          coordinator: "Adam Roe",
        },
        {
          id: "49164345-8b97-4fc5-a09b-82e32d526780",
          name: "Sustainable Development",
          mod_code: "IS_05_v2",
          department: "IS",
          coordinator: "Florian Grote",
        },
        {
          id: "b4c2350d-dafa-4b41-aef1-046e0cf2a1c0",
          name: "Intercultural Understanding",
          mod_code: "IS_06_v2",
          department: "IS",
          coordinator: "Fabian Geier",
        },
      ])
    );
  }),

  // POST requests
  rest.post("http://localhost/module/addModule", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
