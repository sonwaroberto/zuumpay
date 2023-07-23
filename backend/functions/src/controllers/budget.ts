import { Request, Response } from "express";
import { newBudgetData,makeNewBudget,balanceData,getBalance,addBudget,addBudgetData,editBudget,editBudgetData,payFromBudget,payFromBudgetData,expenseData,getExpense } from "../services/budget";

export const NewBudget = async (req: Request, res: Response) => {
  const payload: newBudgetData = {
    amount: req.body.amount,
    name: req.body.name,
    schedulePayments: req.body.schedulePayments,
    paymentAdress: req.body.paymentAdress,
    userId: req.body.userId,
    date: req.body.date,
    expense: req.body.expense
  };
  try { 
    await makeNewBudget(payload);
    res.send("New budget created successfully")
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};

export const Balance = async (req: Request, res: Response) => {
  const payload: balanceData = {
    userId: req.body.userId
  };
  try {
    // send response 
    const balance = await getBalance(payload);
    res.status(200).json({ status: 200, data: balance,
       message: "Succesfully get balance" 
    });
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const Expense = async (req: Request, res: Response) => {
  const payload: expenseData = {
    userId: req.body.userId
  };
  try {
    // send response 
    const balance = await getExpense(payload);
    res.status(200).json({ status: 200, data: balance,
       message: "Succesfully get the expense" 
    });
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};

export const AddBudget = async (req: Request, res: Response) => {
  const payload: addBudgetData = {
    userId: req.body.userId,
    name: req.body.name,
    amount: req.body.amount
  };
  try {
    // send response 
    const response = await addBudget(payload);
    res.status(200).json({ status: 200, data: response});
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};

export const EditBudget = async (req: Request, res: Response) => {
  const payload: editBudgetData = {
    name: req.body.name,
    amount: req.body.amount,
    schedulePayments: req.body.schedulePayments,
    paymentAdress: req.body.paymentAdress,
    uid: req.body.uid,
    userId: req.body.userId
  };
  try {
    // send response 
    const response = await editBudget(payload);
    res.status(200).json({ status: 200, data: response});
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};

export const PayFromBudget = async (req: Request, res: Response) => {
  const payload: payFromBudgetData = {
    name: req.body.name,
    amount: req.body.amount,
    uid: req.body.uid,
    userId: req.body.userId,
    expense: req.body.expense
  };
  try {
    // send response 
    const response = await payFromBudget(payload);
    res.status(200).json({ status: 200, data: response});
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};