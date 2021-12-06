import { SIGN_IN } from "./actionTypes";

export default function signIn(email) {
  return {
    type: SIGN_IN,
    payload: email
  }
}