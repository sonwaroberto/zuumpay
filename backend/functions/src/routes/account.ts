import { Express, Application } from "express";
import * as express from "express";
<<<<<<< HEAD
import { registerAdmin, registerAgent, registerClient, registerMerchant } from "../controllers/account";
=======
import { registerClient, test } from "../controllers/account";
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
const cors = require("cors");
require("express-group-routes");

interface CustomApp extends Express {
  group: Function;
}

const app: CustomApp = express() as CustomApp;
app.use(express.json());
app.use(cors({ origin: true }));

app.group("/api/v1", (router: Application) => {
  /**
   * @swagger
   * /account/api/v1/clients:
   *   post:
   *    summary: Used to create new client
   *    description: Used to create new client
   *    responses:
   *      200:
   *        description: successfully created a new client
   */
  router.post("/clients", registerClient);
<<<<<<< HEAD
    /**
   * @swagger
   * /account/api/v1/agents:
   *   post:
   *    summary: Used to create new agent
   *    description: Used to create new agent
   *    responses:
   *      200:
   *        description: successfully created a new agent
   */
  router.post("/agents", registerAgent);
       /**
   * @swagger
   * /account/api/v1/merchants:
   *   post:
   *    summary: Used to create new merchant
   *    description: Used to create new merchant
   *    responses:
   *      200:
   *        description: successfully created a new merchant
   */
  router.post("/merchants", registerMerchant);
    /**
   * @swagger
   * /account/api/v1/admins:
   *   post:
   *    summary: Used to create new admin
   *    description: Used to create new admin
   *    responses:
   *      200:
   *        description: successfully created a new admin
   */
  router.post("/admins", registerAdmin);
=======

  /**
   * @swagger
   * /account/api/v1/test/{name}:
   *   get:
   *     summary: Just test
   *     description: Just test
   *     parameters:
   *       - in: path
   *         name: name
   *         schema:
   *           type: string
   *           example: John Doe
   *         required: true
   *         description: The name of the user
   *     responses:
   *       200:
   *         description: Could test
   *         content:
   *           text/plain:
   *             example: Welcome John Doe
   */
  router.get("/test/:name", test);
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
});

export default app;
