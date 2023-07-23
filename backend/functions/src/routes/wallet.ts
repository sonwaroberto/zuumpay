import { Express, Application } from "express";
import * as express from "express";
import {Loan, autoReserve, addReserve, newReserve , Transfer, RemoveReserve } from "../controllers/wallet";
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
   * /wallet/api/v1/Loan:
   *   post:
   *    summary: Used to make new loan
   *    description: Used to make new loan
   *    responses:
   *      200:
   *        description: successfully make the new loan
   */
  router.post("/loan", Loan);
   /**
   * @swagger
   * /wallet/api/v1/transfer:
   *   post:
   *    summary: Used to make new transfer
   *    description: Used to make new transfer
   *    responses:
   *      200:
   *        description: successfully make the new transfer
   */
  router.post("/user", Transfer);
  /**
   * @swagger
    * /wallet/api/v1/reserve/auto:
   *   post:
   *    summary: Used to make new new automatic reserve
   *    description: Used to make new automatic reserve
   *    responses:
   *      200:
   *        description: successfully make the new automatic reserve
   */
   router.post("/reserve/auto", autoReserve);
  /**
   * @swagger
   * /wallet/api/v1/reserve/new:
   *   post:
   *    summary: Used to make new new reserve
   *    description: Used to make new reserve
   *    responses:
   *      200:
   *        description: successfully add new new reserve
   */
    router.post("/reserve/new", newReserve);
  /**
   * @swagger
   * /wallet/api/v1/reserve/add:
   *   post:
   *    summary: Used to make add reserve to existing one
   *    description: Used to make reserve to existing one
   *    responses:
   *      200:
   *        description: successfully added the reserve
   */
    router.post("/reserve/add", addReserve);
    /**
   * @swagger
   * /wallet/api/v1/reserve/remove/:reserveId:
   *   post:
   *    summary: Used to remove a reserve that the removal date has arrived
   *    description: Used to remove a reserve that the removal data has arrived
   *    responses:
   *      200:
   *        description: successfully remove the reserve
   */
    router.put("/reserve/remove/:reserveId",RemoveReserve);
});

export default app;
