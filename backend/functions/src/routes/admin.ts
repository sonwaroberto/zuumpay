import { Express, Application } from "express";
import * as express from "express";
import {approveAgent, rejectAgent, topUpAgent } from "../controllers/admin";
const cors = require("cors");
require("express-group-routes");

interface CustomApp extends Express {
  group: Function;
}

const app: CustomApp = express() as CustomApp;
app.use(express.json());
app.use(cors({ origin: true }));

app.group("/api/v1/agents", (router: Application) => {
  /**
   * @swagger
   * /admin/api/v1/agents/approve/{agentId}:
   *   put:
   *    summary: Used to approve a new agent
   *    description: Used to approve a new agent
   *    responses:
   *      200:
   *        description: successfully created the new agent
   */
  router.put("/approve/:agentId", approveAgent);
    /**
   * @swagger
   * /admin/api/v1/agents/reject/{agentId}:
   *   post:
   *    summary: Used to reject new agent
   *    description: Used to reject new agent
   *    responses:
   *      200:
   *        description: successfully reject the new agent
   */
  router.put("/reject/:agentId", rejectAgent);
   /**
   * @swagger
   * /admin/api/v1/agents/top-up/{agentId}:
   *   post:
   *    summary: Used to top-up a agent
   *    description: Used to top-up a agent
   *    responses:
   *      200:
   *        description: successfully top-up the agent
   */
  router.put("/top-up/:agentId", topUpAgent);
});

export default app;