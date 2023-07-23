import * as functions from "firebase-functions";
<<<<<<< HEAD
import * as admins from "firebase-admin";
const axios = require('axios').default;
import { v4 as uuidv4 } from 'uuid';

const envFile = `${process.env.FUNCTIONS_EMULATOR ? '.dev' : '.prod'}.env`;
require('dotenv').config({ path: envFile });
let serviceAccount = require("../serviceAccountKey.json");
admins.initializeApp({
  credential: admins.credential.cert(serviceAccount),
});
const db = admins.firestore()

import accountApp from "./routes/account";
import swaggerApp from "./routes/swagger";
import walletApp from "./routes/wallet";
import adminApp from "./routes/admin";
import merchantApp from "./routes/merchant";
import budgetApp from "./routes/budget";

export const account = functions.https.onRequest(accountApp);
export const swagger = functions.https.onRequest(swaggerApp);
export const wallet = functions.https.onRequest(walletApp);
export const admin = functions.https.onRequest(adminApp);
export const merchant = functions.https.onRequest(merchantApp);
export const budget = functions.https.onRequest(budgetApp);

//charge function
async function charge(userId:string, amount:number){
  const account = await db.collection("accounts").where('userId','==',userId).get()
  const accountBalance = Number(account.docs[0].data().accountBalance)
  if(accountBalance < Number(amount))
    return "not charged"
  await db.collection("accounts").doc(userId).update({
    accountBalance: accountBalance - Number(amount)
  })
  return "charged"
}
//credit function
async function credit(userId:string,amount:number){
  const account = await db.collection("accounts").where('userId','==',userId).get()
  const accountBalance = Number(account.docs[0].data().accountBalance)
  await db.collection("accounts").doc(userId).update({
    accountBalance:accountBalance + Number(amount)
  })
}
// //create transaction function
// const createTransaction = async(TRANSACTION_DEPOSIT:string,amount:number,userId:string,state:boolean)=>{
//   await db.collection("accounts").doc(userId).collection("transaction").doc().set({
//     transaction:TRANSACTION_DEPOSIT,
//     amount:amount,prod
//     userId:userId,
//     status:state
//   })
//   return
// }
// //create notification function
// const createNotification = async (userId:string,NOTIFICATION_DEPOSITED:string,{amount}:any)=>{
//   await db.collection("accounts").doc(userId).collection("notifications").doc().set({
//     transaction:NOTIFICATION_DEPOSITED,
//     amount:amount,
//     userId:userId
//   })
//   return
// }
// Deposit
exports.deposit = functions.https.onCall(async ({ amount, phone, userId }, context) => {
  const token = uuidv4()
  await db.collection('accounts').doc(userId).update({ token });
  const data = {
    service: "mET1nxaDpZIsJJngMRCykC2xDlgnmABt",
    phonenumber: phone,
    amount,
    payment_ref: token,
    item_ref: userId,
    user: userId,
    notify_url: "https://us-central1-njangi-app.cloudfunctions.net/monetbil_deposit_callback"
  };
  try {
    const res = data
    console.log(res);
    return res;
  } catch (e) {
    console.log(e.response.data);
    throw new functions.https.HttpsError('internal', 'Monetbil error');
  }
})
// Withdrawal
exports.withdraw = functions.https.onCall(async ({ amount, phone, userId }, context) => {
  if (await charge(userId, amount) !== "charged") {
    throw new functions.https.HttpsError('failed-precondition', 'Insufficient balance', { amount });
  }
  const token = uuidv4()
  await db.collection('accounts').doc(userId).update({ token });
  let data :{ [key:string]: any} = {
    service_key: "mET1nxaDpZIsJJngMRCykC2xDlgnmABt",
    service_secret: "09G6N6vQZDKL3SM9iVPl6yXz4ZYeuOYVPYAwooIjObiynO8OP3zsYbo2QbJaFItN",
    phonenumber: `237${phone}`,
    amount,
    processing_number: token,
    user: userId,
    payout_notification_url: "https://us-central1-njangi-app.cloudfunctions.net/monetbil_withdrawal_callback"
  };
  try {
    const res = data
    console.log(res);
    return res;
  } catch (e) {
    console.log(e.response.data);
    credit(userId, amount);
    throw new functions.https.HttpsError('internal', 'Monetbil error');
  }
})
// // Deposit Callback
// exports.monetbil_deposit_callback = functions.https.onRequest(async (req:any, res:any) => {
//   const { payment_ref: token, user: userId, amount, status } = req.body;
//   if (token && userId && status !== 'failed') {
//     const ref = db.collection('accounts').doc(userId);
//     const doc = await ref.get();
//     if (doc.exists) {
//       const account = doc.data();
//       if (account.token === token) {
//         credit(userId, amount);
//         createTransaction("TRANSACTION_DEPOSIT", amount, userId, true);
//         createNotification(userId, "NOTIFICATION_DEPOSITED", { amount });
//         ref.update({ token: null });
//         return res.send('ok')
//       }
//     }
//   }
//   return res.status(403).send('Forbidden');
// });
// // Withdrawal Callback
// exports.monetbil_withdrawal_callback = functions.https.onRequest(async (req:any, res:any) => {
//   const { processing_number: token, user: userId, amount, success } = req.body;
//   if (token && userId) {
//     const ref = db.collection('accounts').doc(userId);
//     const doc = await ref.get();
//     if (doc.exists) {
//       const account = doc.data();
//       if (account.token === token) {
//         if (success === '0')
//           credit(userId, amount);
//         else
//           createTransaction(" ", amount, userId, false);
//           createNotification(userId, "NOTIFICATION_WITHDRAWN", { amount });
//         ref.update({ token: null });
//         return res.send('ok')
//       }
//     }
//   }
//   return res.status(403).send('Forbidden');
// });
=======
import * as admin from "firebase-admin";
const envFile = `${process.env.FUNCTIONS_EMULATOR ? '.dev' : '.prod'}.env`;
require('dotenv').config({ path: envFile });

let serviceAccount = require("../serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

import accountApp from "./routes/account";
import swaggerApp from "./routes/swagger";

export const account = functions.https.onRequest(accountApp);
export const swagger = functions.https.onRequest(swaggerApp);
>>>>>>> a8d0c9b30339e46493c7b5214911f1ff3656f953
