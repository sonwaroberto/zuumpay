import * as admin from "firebase-admin";

export type newBudgetData = {
  name:String,
  amount: Number,
  schedulePayments: Date,
  paymentAdress: String,
  userId : string,
  date: Date,
  expense:Number
};
export type balanceData = {
  userId: string
};

export type expenseData = {
  userId: string
};

export type addBudgetData = {
  name: String,
  amount: Number,
  userId: string
}

export type editBudgetData = {
  name: String,
  amount: Number,
  schedulePayments: Date,
  paymentAdress: String,
  uid: string,
  userId: string
}

export type payFromBudgetData = {
  name: String,
  amount: Number,
  uid: string,
  userId: string,
  expense:Number
}


const req = admin.firestore().collection('accounts')
export const makeNewBudget = async (data: newBudgetData) => {
  const account = await req.where('userId', '==', data.userId).get()
  account.forEach((doc) => {
    const accountBalance = doc.data().accountBalance
    if(accountBalance < data.amount)
      return "The amount in your account is inssufficient to make the transaction"
    const newAccountBalance = Number(accountBalance) - Number(data.amount)
    req.doc(doc.id).update({
      accountBalance: newAccountBalance
    })
    return req.doc(doc.id).collection("budget").doc().set(data)
  })
}

export const getBalance = async (data: balanceData) => {
  let budgetElts: any[] = []
  let budgetList = []
  const snapshot = await req.doc(data.userId).collection("budget").get()
    snapshot.forEach((doc)=>{
      budgetElts.push({...doc.data(),uid:doc.id})
    })
    budgetList = budgetElts
    return budgetList
}

export const getExpense = async (data: expenseData) => {
  let expenseElts: any[] = []
  let expenseList = []
  const snapshot = await req.doc(data.userId).collection("expense").get()
    snapshot.forEach((doc)=>{
      expenseElts.push({...doc.data(),uid:doc.id})
    })
    expenseList = expenseElts
    return expenseList
}

export const addBudget = async (data: addBudgetData) => {
  const account = await req.where('userId', '==', data.userId).get()
  let text = ''
  account.forEach(async (doc) => {
    const accountBalance = doc.data().accountBalance
    if(accountBalance < data.amount)
      text = "The amount in your account is inssufficient to make the transaction"
    const snapshot = await req.doc(doc.id).collection("budget").where("name","==", data.name).get()
    snapshot.forEach((snap)=>{
      const budgetBalance = snap.data().amount
      const newBudgetBalance = Number(budgetBalance) + Number(data.amount)
      req.doc(doc.id).collection("budget").doc(snap.id).update({
        amount: newBudgetBalance
      })
      const newAccountBalance = Number(accountBalance) - Number(data.amount)
      req.doc(doc.id).update({
        accountBalance: newAccountBalance
      })
    })
    text = "successfully made the transaction"
  })
    return text
}

export const editBudget = async (data: editBudgetData) => {
  const account = await req.where('userId', '==', data.userId).get()
  account.forEach(async (doc) => {
    const snapBudget = await req.doc(doc.id).collection("budget").get()
    snapBudget.forEach((snap)=>{
      if (snap.id == data.uid) {
        if (Number(data.amount) < Number(snap.data().amount)) {
          const reduceBudgetAmount = Number(snap.data().amount) - Number(data.amount)
          req.doc(doc.id).collection("budget").doc(data.uid).update({
            name: data.name,
            amount: data.amount,
            schedulePayments: data.schedulePayments,
            paymentAdress: data.paymentAdress,
          })
          const newAccountBalance = Number(doc.data().accountBalance) + Number(reduceBudgetAmount)
          req.doc(doc.id).update({
            accountBalance: newAccountBalance
          })
        } else {
          const topUpBudgetAmount = Number(data.amount) - Number(snap.data().amount)
          if(topUpBudgetAmount > Number(doc.data().accountBalance)) {
            console.log("balance insufficient to make the transaction")
          }else {
            req.doc(doc.id).collection("budget").doc(data.uid).update({
              name: data.name,
              amount: data.amount,
              schedulePayments: data.schedulePayments,
              paymentAdress: data.paymentAdress,
            })
            const newAccountBalance = Number(doc.data().accountBalance) - Number(topUpBudgetAmount)
            req.doc(doc.id).update({
              accountBalance: newAccountBalance
            })
          }
        }
      }else {
        return
      }
    })
  })
  return
}

export const payFromBudget = async (data: payFromBudgetData) => {
  const account = await req.where('userId', '==', data.userId).get()
  account.forEach(async (doc) => {
    const snapBudget = await req.doc(doc.id).collection("budget").get()
    let BudgetAmount
    snapBudget.forEach(async(snap)=>{
      if (snap.id == data.uid) {
        BudgetAmount = snap.data().amount
        const expense = Number(snap.data().expense) + Number(data.expense)
        if (Number(data.amount) > Number(BudgetAmount)) {
          console.log("balance insufficient to make the payment")
        } else {
          let newBudgetAmount = Number(BudgetAmount) - Number(data.amount)
          req.doc(doc.id).collection("budget").doc(data.uid).update({
            amount:newBudgetAmount,
            expense: expense
          })
          await req.doc(doc.id).collection("expense").doc(doc.id).create({
            expense:0
          }).then(()=>{
            req.doc(doc.id).collection("expense").doc(doc.id).update({
              expense:admin.firestore.FieldValue.increment(Number(data.expense))
            })
          }).catch(()=>{
            req.doc(doc.id).collection("expense").doc(doc.id).update({
              expense:admin.firestore.FieldValue.increment(Number(data.expense))
            })
          })
        }
      }else {
        return
      }
    })
  })
  return
}