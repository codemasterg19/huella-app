import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export const loginWithEmail = async (
  email: string,
  password: string
) => {
  return await signInWithEmailAndPassword(auth, email, password);
};
