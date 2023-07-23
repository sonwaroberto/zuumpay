import * as admin from "firebase-admin";

export type CreateServiceData = {
  websiteName: string,
  websiteURL: string,
  websiteDescription: string,
  service_key: string
};

const ref = admin.firestore().collection("services")
export const createService = async (data: CreateServiceData) => {
  data.service_key = ref.doc().id
  ref.doc(data.service_key).set(data)
};