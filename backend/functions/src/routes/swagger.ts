import * as express from "express";
import { Application } from "express";
import * as swaggerUI from "swagger-ui-express";
import * as swaggerJSDoc from "swagger-jsdoc";

const app: Application = express();
app.use(express.json());
const swaggerOptions = {
  definition: {
    info: {
      title: "Client API",
      version: "1.0.0",
      description: "Client API Informations",
      contact: {
        name: "Kamga Simo Junior",
        email: "kamgasimojunior@gmail.com",
      },
    },
		host: process.env.HOST,
		basePath: process.env.BASE_PATH,
    servers: [
      { url: "/", description: "API server" },
    ],
  },
  apis: ["src/routes/*.ts"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export default app;
