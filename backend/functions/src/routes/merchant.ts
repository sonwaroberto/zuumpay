import { Express, Application } from "express";
import * as express from "express";
import { CreateService} from "../controllers/merchant";

const cors = require("cors");
require("express-group-routes");

interface CustomApp extends Express {
  group: Function;
}

const app: CustomApp = express() as CustomApp;
app.use(express.json());
app.use(cors({ origin: true }));

app.group("/api/v1/merchant", (router: Application) => {
  /**
   * @swagger
   * /merchant/api/v1/merchant/create-service/:
   *   put:
   *    summary: Used to create new service
   *    description: Used to create new service
   *    responses:
   *      200:
   *        description: successfully created the new service
   */
  router.post("/create-service", CreateService);
});

export default app;