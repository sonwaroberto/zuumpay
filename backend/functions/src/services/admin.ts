import * as admin from "firebase-admin";
export type ApproveData = {
  agentId: string;
};
export type rejectData = {
  agentId: string;
};
export type topUpData = {
  agentId: string,
  amount: number,
  pin: string
};

const ref = admin.firestore().collection("accounts")
export const createApproveAgent = async (data: ApproveData) => {
  return ref.doc(data.agentId).update({
    status: true
  });
};
export const createRejectAgent = async (data: rejectData) => {
  return ref.doc(data.agentId).delete();
};
export const createTopUp = async (data: topUpData) =>{
  const adminAccount = await ref.where("pin","==",data.pin).get()
  adminAccount.forEach((doc)=>{
    const newAdminBalance =  Number(doc.data().accountBalance) - Number(data.amount)
    ref.doc(doc.id).update({
      accountBalance : newAdminBalance
    })
  })
  const agentAccount = await ref.where("userId", "==",data.agentId).get()
  agentAccount.forEach((doc)=>{
    const newAgentBalance =  Number(doc.data().accountBalance) + Number(data.amount)
    ref.doc(doc.id).update({
      accountBalance : newAgentBalance
    }) 
  })
}