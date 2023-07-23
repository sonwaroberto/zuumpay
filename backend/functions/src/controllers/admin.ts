import { Request, Response } from "express";
import {createApproveAgent, ApproveData, rejectData, createRejectAgent, createTopUp, topUpData } from "../services/admin";

export const approveAgent = async (req: Request, res: Response) => {
  const payload: ApproveData = {
    agentId: req.body.agentId,
  };
  try {
    await createApproveAgent(payload);
    res.send("agent approve successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const rejectAgent = async (req: Request, res: Response) => {
  const payload: rejectData = {
    agentId: req.body.agentId,
  };
  try {
    await createRejectAgent(payload);
    res.send("agent reject successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const topUpAgent = async (req: Request, res: Response) => {
  const payload: topUpData = {
    agentId: req.body.agentId,
    amount: req.body.amount,
    pin: req.body.pin
  };
  try {
    await createTopUp(payload);
    res.send("top-up made successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};