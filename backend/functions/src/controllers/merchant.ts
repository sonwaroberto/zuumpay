import { Request, Response } from "express";
import { createService,CreateServiceData} from "../services/merchant";

export const CreateService = async (req: Request, res: Response) => {
  const payload: CreateServiceData = {
    websiteName: req.body.websiteName,
    websiteURL: req.body.websiteURL,
    websiteDescription: req.body.websiteDescription,
    service_key: req.body.service_key
  };
  try {
    await createService(payload);
    res.send("service created successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};