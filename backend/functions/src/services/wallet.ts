import * as admin from "firebase-admin";
import * as moment from "moment";
const req = admin.firestore().collection('accounts')

export type makeDepositData = {
  amount:number,
  phone:number,
  userId: string
}
export type loanData = {
  amount: Number,
  loanType: String,
  userId: String,
  date: Date
}
export type reserveData = {
  removeReserveDate: Date,
  amount: number,
  date: Date,
  userId: string
};
export type transferData = {
  amount:number,
  zuumpayId: string
  date: Date,
  pin: string
};
export type newReserveData = {
  amount:number,
  endDate: Date,
  userId: string
};
export type addReserveData = {
  amount:number,
  reserveId:string,
  userId:string
};
export type autoReserveData = {
  type: string,
  amount: number,
  endDate:Date,
  userId: string
};
export type removeReserveData = {
  reserveId: string,
  userId : string
}
//make loan function
export const makeLoan = async (data: loanData) => {
  const account = await req.where('userId', '==', data.userId).get()
  account.forEach((doc) => {
    const accountBalance = doc.data().accountBalance
    const newAccountBalance = Number(accountBalance) + Number(data.amount)
    admin.firestore().collection("accounts").doc(doc.id).update({
      accountBalance: newAccountBalance
    })
    return admin.firestore().collection("accounts").doc(doc.data().userId).collection("loan").doc().set(data)
  })
}
//create new reserve function
export const makeNewReserve = async (data: newReserveData) => {
  const account = await req.where('userId', '==', data.userId).get()
  let accountBalance = Number(account.docs[0].data().accountBalance)
  if(accountBalance < Number(data.amount)){
    return
  }else {
    const newAccountBalance = Number(accountBalance) - Number(data.amount)
    admin.firestore().collection("accounts").doc(account.docs[0].id).update({
      accountBalance: newAccountBalance
    })
    req.doc(data.userId).collection("reserve").doc().set({
      amount: data.amount,
      endDate: data.endDate
    })
  }
  return (accountBalance>=Number(data.amount))
};
// add reserve function
export const makeAddReserve = async (data: addReserveData) => {
  const account = await req.where('userId', '==', data.userId).get()
  let accountBalance = Number(account.docs[0].data().accountBalance)
  if(accountBalance < Number(data.amount)){
    return
  }else {
    const newAccountBalance = Number(accountBalance) - Number(data.amount)
    admin.firestore().collection("accounts").doc(account.docs[0].id).update({
      accountBalance: newAccountBalance
    })
    let AmountReserve = 0
    const reserve = await req.doc(data.userId).collection("reserve").get()
    reserve.forEach((doc)=>{
      if(doc.id == data.reserveId)
        AmountReserve = doc.data().amount
    })
    req.doc(data.userId).collection("reserve").doc(data.reserveId).update({
      amount: (Number(AmountReserve) + Number(data.amount))
    })
  }
  return (accountBalance>=Number(data.amount))
};
//auto reserve function
export const makeAutoReserve = async (data: autoReserveData) => {
  const account = await req.where('userId', '==', data.userId).get()
  let accountBalance = Number(account.docs[0].data().accountBalance)
  if(accountBalance < Number(data.amount)){
    return
  }else {
    const newAccountBalance = Number(accountBalance) - Number(data.amount)
    admin.firestore().collection("accounts").doc(account.docs[0].id).update({
      accountBalance: newAccountBalance
    })
    req.doc(data.userId).collection("reserve").doc().set({
      amount: data.amount,
      endDate: data.endDate,
      type:data.type
    })
  }
  return (accountBalance>=Number(data.amount))
}
//remove reserve function
export const makeRemoveReserve = async (data: removeReserveData) => {
  const account = await req.where('userId', '==', data.userId).get()
  let accountBalance = Number(account.docs[0].data().accountBalance)
  let responce = false
  const reserve = await req.doc(data.userId).collection("reserve").get()
  reserve.forEach((doc)=>{
    if (doc.id == data.reserveId){
      if(doc.data().endDate <= moment().format('Y/M/D')){
        responce = true
        let AmountReserve = Number(doc.data().amount)
        req.doc(data.userId).collection("reserve").doc(doc.id).delete()
        admin.firestore().collection("accounts").doc(data.userId).update({
          accountBalance: accountBalance + AmountReserve
        })
      }else{
        responce = false
      }
    }
  })
  return responce
}
//transfer function
export const makeTransfer = async (data: transferData) => {
  const account = await req.where('pin', '==', data.pin).get()
  const receiver = await req.where('zuumpayId', '==', data.zuumpayId).get()
  account.forEach((doc) => {
    const saving = 1+Number(doc.data().saving)
    const accountBalance = doc.data().accountBalance
    admin.firestore().collection("accounts").doc(doc.id).update({
      accountBalance: Number(accountBalance) - Number(data.amount),
      saving: saving
    })
    receiver.forEach((snap) => {
      const accountBalance = snap.data().accountBalance
      admin.firestore().collection('accounts').doc(snap.id).update({
        accountBalance: Number(accountBalance) + Number(data.amount)
      })
    })

  })
  return account
};