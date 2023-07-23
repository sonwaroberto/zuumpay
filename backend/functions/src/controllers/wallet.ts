import { Request, Response } from "express";
import {makeLoan,loanData,makeTransfer, transferData, makeNewReserve, newReserveData, addReserveData, makeAddReserve, makeAutoReserve, autoReserveData, removeReserveData,makeRemoveReserve } from "../services/wallet";

export const Loan = async (req: Request, res: Response) => {
  const payload: loanData = {
    amount: req.body.amount,
    loanType: req.body.loanType,
    userId: req.body.userId,
    date: req.body.date
  };
  try { 
    await makeLoan(payload);
    res.send("loan made successfully")
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const Transfer = async (req: Request, res: Response) => {
  const payload: transferData = {
    amount: req.body.amount,
    pin: req.body.pin,
    zuumpayId: req.body.zuumpayId,
    date: req.body.date,
  };
  try {
    let account = await makeTransfer(payload);
    if(account.size <=0){
      res.send("pin incorrect")
      console.log("pin incorrect")
    }else{
      res.send("transfer made successfully")
      console.log("transfer made successfully")
    }
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const newReserve = async (req: Request, res:Response) => {
  const payload: newReserveData = {
    endDate: req.body.endDate,
    amount: req.body.amount,
    userId: req.body.userId
  }
  try {
    let responce = await makeNewReserve(payload);
    if(responce){
      res.send("new reserve made successfully")
    }else{
      res.send("Account Balance inssufficient to make the reserve")
    }
    console.log(responce)
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
}
export const addReserve = async (req: Request, res:Response) => {
  const payload: addReserveData = {
    amount: req.body.amount,
    reserveId: req.body.reserveId,
    userId: req.body.userId
  }
  try {
    let responce = await makeAddReserve(payload);
    if(responce){
      res.send("reserve added successfully")
    }else{
      res.send("Account Balance inssufficient to add the reserve")
    }
    console.log(responce)
    return
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
}
export const autoReserve = async (req: Request, res:Response) => {
  const payload: autoReserveData= {
    type: req.body.type,
    endDate: req.body.endDate,
    amount: req.body.amount,
    userId: req.body.userId
  }
  try {
    let responce = await makeAutoReserve(payload);
    if(responce){
      res.send("auto reserve made successfully")
    }else{
      res.send("Account Balance inssufficient to make the auto   reserve")
    }
    console.log(responce)
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
}
export const RemoveReserve = async (req: Request, res: Response) => {
  const payload : removeReserveData = {
    reserveId: req.body.reserveId,
    userId: req.body.userId
  }
  try {
    let responce = await makeRemoveReserve(payload);
     if(responce){
      res.send("reserve removed successfully")
    }else{
      res.send("The remove date has not yet arrived")
    }
    console.log(responce)
    return
  } catch (e) {
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
}