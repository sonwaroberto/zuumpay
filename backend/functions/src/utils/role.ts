import * as admin from "firebase-admin";

type User = admin.auth.UserRecord;
type Role = "superadmin" | "admin" | "client" | "agent" | "merchant";

export const setRole = async (email: string, role: Role) => {
  const user: User = await admin.auth().getUserByEmail(email);
  await admin.auth().setCustomUserClaims(user.uid, {
    role: role,
  });
  return {

    message: `Success! ${role} has been assigned to ${email}`,

    message: `Succes! ${role} has been assigned to ${email}`,

  };
};
