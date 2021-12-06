import supabase from "../../configs/supabase";
import { SIGN_IN, SIGN_OUT } from "../actions/actionTypes";
import initialState from "./initialState";
import _ from "lodash";

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SIGN_IN:
      const { user } = await supabase.auth.signIn({ email: action.payload });
      newState = { ...state, user };
      return _.cloneDeep(newState);

    case SIGN_OUT:
      const { error } = await supabase.auth.signOut();
      newState = { ...state, user };
      return _.cloneDeep(newState);

    default:
      return _.cloneDeep(state);
  }
}
