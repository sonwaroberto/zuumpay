import { Express, Application } from "express";
import * as express from "express";
import {NewBudget, Balance, AddBudget, EditBudget, PayFromBudget,Expense} from "../controllers/budget";
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
   * /budget/api/v1/new:
   *   post:
   *    summary: Used to create a new budget
   *    description: Used to create a new budget
   *    responses:
   *      200:
   *        description: successfully created the new budget
   */
  router.post("/new", NewBudget);
   /**
   * @swagger
   * /budget/api/v1/balance:
   *   post:
   *    summary: Used to get budget balance
   *    description: Used to get budget balance
   *    responses:
   *      200:
   *        description: successfully get the budget balance
   */
    router.put("/balance", Balance);
    /**
   * @swagger
   * /budget/api/v1/add-budget:
   *   post:
   *    summary: Used to top-up the budget
   *    description: Used to top-up the budget
   *    responses:
   *      200:
   *        description: successfully top-up the budget
   */
     router.put("/add-budget", AddBudget);
      /**
   * @swagger
   * /budget/api/v1/edit-budget:
   *   post:
   *    summary: Used to edit the budget
   *    description: Used to edit the budget
   *    responses:
   *      200:
   *        description: successfully edit the budget
   */
       router.put("/edit-budget", EditBudget);
        /**
   * @swagger
   * /budget/api/v1/pay-from-budget:
   *   post:
   *    summary: Used to make payment from budget
   *    description: Used to make payment from budget
   *    responses:
   *      200:
   *        description: successfully made the payment from budget
   */
    router.put("/pay-from-budget", PayFromBudget);
      /**
    * @swagger
    * /budget/api/v1/expense:
    *   post:
    *    summary: Used to get expense balance
    *    description: Used to get expense balance
    *    responses:
    *      200:
    *        description: successfully get the expense balance
    */
      router.put("/expense", Expense);
});

export default app;
