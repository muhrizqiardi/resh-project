import supabase from "../configs/supabase";
import _ from "lodash";

export const auth = {
  state: {
    signedIn: false,
    loading: false,
    magicLinkSent: false,
    error: null,
    session: null,
    user: {},
  },

  reducers: {
    setLoading(state, payload) {
      return _.cloneDeep({ ...state, loading: payload });
    },
    setError(state, payload) {
      return _.cloneDeep({ ...state, error: payload });
    },
    setSession(state, payload) {
      console.log({"the session": payload});
      return _.cloneDeep({ ...state, session: payload });
    },
    setMagicLinkSent(state, payload) {
      return _.cloneDeep({ ...state, magicLinkSent: payload });
    },
    setSignedIn(state, payload) {
      return _.cloneDeep({ ...state, signedIn: payload });
    },
  },

  effects: (dispatch) => ({
    async signInAsync(payload, rootState) {
      dispatch.auth.setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email: payload,
      });
      if (!error) {
        dispatch.auth.setMagicLinkSent(true);
      } else {
        dispatch.auth.setError(error);
        console.error("Error happened while trying to sign in: ", error);
      }
      dispatch.auth.setLoading(false);
    },

    // TODO: handle sign out
  }),
};
