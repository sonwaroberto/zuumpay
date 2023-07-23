import { Request, Response } from "express";
<<<<<<< HEAD
import { createClient, CreateClientData, createAgent, CreateAgentData, createMerchant, CreateMerchantData, createAdmin, CreateAdminData } from "../services/account";
=======
import { createClient, CreateClientData } from "../services/account";
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
import { setRole } from "../utils/role";

export const registerClient = async (req: Request, res: Response) => {
  const payload: CreateClientData = {
    userId: req.body.userId,
<<<<<<< HEAD
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
    phone: req.body.phone,
    countryCode: req.body.countryCode,
    currency: req.body.currency,
    address: req.body.address,
    zipCode: req.body.zipCode,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    role: req.body.role,
    country: req.body.country,
    date: req.body.date,
    accountBalance: req.body.accountBalance,
    accountNumber: req.body.accountNumber,
    pin: req.body.pin,
    zuumpayId: req.body.zuumpayId,
    bitCoinBalance: req.body.bitCoinBalance,
    saving: req.body.saving,
    imageId: req.body.imageId
=======
    name: req.body.name,
    email: req.body.email,
    // ...
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
  };
  try {
    await createClient(payload);
    setRole(payload.email, "client");
<<<<<<< HEAD
    res.send("client create successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const registerAgent = async (req: Request, res: Response) => {
  const payload: CreateAgentData = {
    userId: req.body.userId,
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
    phone: req.body.phone,
    countryCode: req.body.countryCode,
    currency: req.body.currency,
    address: req.body.address,
    zipCode: req.body.zipCode,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    role: req.body.role,
    country: req.body.country,
    date: req.body.date,
    kiosksLocation: req.body.kiosksLocation,
    amountRange: req.body.amountRange,
    numberOfKiosk :req.body.numberOfKiosk,
    idType: req.body.idType,
    idNumber: req.body.idNumber,
    expiryDateId: req.body.expiryDateId,
    imageId: req.body.imageId,
    accountBalance: req.body.accountBalance,
    accountNumber: req.body.accountNumber,
    pin: req.body.pin,
    zuumpayId: req.body.zuumpayId,
    bitCoinBalance:req.body.bitCoinBalance,
    saving:req.body.saving,
    status: req.body.status
  };
  try {
    await createAgent(payload);
    setRole(payload.email, "agent");
    res.send("agent create successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
export const registerMerchant = async (req: Request, res: Response) => {
  const payload: CreateMerchantData = {
    userId: req.body.userId,
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
    phone: req.body.phone,
    countryCode: req.body.countryCode,
    currency: req.body.currency,
    address: req.body.address,
    zipCode: req.body.zipCode,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    role: req.body.role,
    country: req.body.country,
    date: req.body.date,
    accountBalance: req.body.accountBalance,
    accountNumber: req.body.accountNumber,
    pin: req.body.pin,
    zuumpayId: req.body.zuumpayId,
    bitCoinBalance:req.body.bitCoinBalance,
    saving:req.body.saving
  };
  try {
    await createMerchant(payload);
    setRole(payload.email, "merchant");
    res.send("merchant create successfully");
    return
=======
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};

<<<<<<< HEAD
export const registerAdmin = async (req: Request, res: Response) => {
  const payload: CreateAdminData = {
    userId: req.body.userId,
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
    phone: req.body.phone,
    countryCode: req.body.countryCode,
    currency: req.body.currency,
    address: req.body.address,
    zipCode: req.body.zipCode,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    role: req.body.role,
    country: req.body.country,
    date: req.body.date,
    accountBalance: req.body.accountBalance,
    accountNumber: req.body.accountNumber,
    pin: req.body.pin,
    zuumpayId: req.body.zuumpayId,
    bitCoinBalance:req.body.bitCoinBalance,
    saving:req.body.saving
  };
  try {
    await createAdmin(payload);
    setRole(payload.email, "admin");
    res.send("admin create successfully");
    return
  } catch (e) {
    // Handle error
    console.log(e);
    if (e instanceof Error) res.status(500).send(e.message);
    else res.status(500).send("Something went wrong!");
  }
};
=======
export const test = (req: Request, res: Response) => {
  res.send(`Welcome ${req.params.name}`);
};
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
