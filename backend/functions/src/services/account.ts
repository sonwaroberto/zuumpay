import * as admin from "firebase-admin";

export type CreateClientData = {
  userId: string;
  email: string;
  fullName: string;
  password:String;
  phone: Number;
  countryCode: String;
  currency: String;
  address: String;
  zipCode: Number;
  dateOfBirth: Date;
  gender: String;
  role: String;
  country: String;
  date: Date,
  accountBalance: number,
  accountNumber: string,
  pin: string,
  zuumpayId: string,
  bitCoinBalance:number,
  saving:number,
  imageId: string
};
export type CreateAgentData = {
  userId: string;
  email: string;
  fullName: string;
  password:String;
  phone: Number;
  countryCode: String;
  currency: String;
  address: String;
  zipCode: Number;
  dateOfBirth: Date;
  gender: String;
  role: String;
  country: String;
  date: Date;
  kiosksLocation: String;
  amountRange: number,
  numberOfKiosk : number;
  idType: string;
  idNumber: string;
  expiryDateId: Date;
  imageId: string,
  accountBalance: number,
  accountNumber: string,
  pin: string,
  zuumpayId: string,
  bitCoinBalance:number,
  saving:number,
  status:Boolean
};
export type CreateMerchantData = {
  userId: string;
  email: string;
  fullName: string;
  password:String;
  phone: Number;
  countryCode: String;
  currency: String;
  address: String;
  zipCode: Number;
  dateOfBirth: Date;
  gender: String;
  role: String;
  country: String;
  date: Date,
  accountBalance: Number,
  accountNumber: string,
  pin: string,
  zuumpayId: string,
  bitCoinBalance:number,
  saving:number
};
export type CreateAdminData = {
  userId: string;
  email: string;
  fullName: string;
  password:String;
  phone: Number;
  countryCode: String;
  currency: String;
  address: String;
  zipCode: Number;
  dateOfBirth: Date;
  gender: String;
  role: String;
  country: String;
  date: Date,
  accountBalance: Number,
  accountNumber: string,
  pin: string,
  zuumpayId: string,
  bitCoinBalance:number,
  saving:number
};
export type testData = {
  userId:string
};
export const createClient = async (data: CreateClientData) => {
  return admin.firestore().collection("accounts").doc(data.userId).set(data);
};
export const createAgent = async (data: CreateAgentData) => {
  return admin.firestore().collection("accounts").doc(data.userId).set(data);
};
export const createMerchant = async (data: CreateMerchantData) => {
  return admin.firestore().collection("accounts").doc(data.userId).set(data);
};
export const createAdmin = async (data: CreateAdminData) => {
  return admin.firestore().collection("accounts").doc(data.userId).set(data);
};