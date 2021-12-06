import supabase from "../configs/supabase";
import _ from "lodash";

export const auth = {
  state: {
    signedIn: false,
    loading: false,
    user: {},
  },
  reducers: {
    setLoading(state, payload) {
      return { ..._.cloneDeep(state), loading: true };
    },
    signIn(state, payload) {
      return _.cloneDeep({
        signedIn: true,
        loading: false,
        user: payload,
      });
    },
    signOut(state, payload) {
      return _.cloneDeep({
        signedIn: false,
        loading: false,
        user: {},
      });
    },
  },
  effects: (dispatch) => ({
    async signInAsync(payload, rootState) {
      dispatch.auth.setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({ payload });
      if (user && !error) {
        dispatch.auth.signIn(payload);
      }
      dispatch.auth.setLoading(false);
    },
    async signOutAsync(payload, rootState) {
      dispatch.auth.setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (!error) {
        dispatch.auth.signOut();
      }
      dispatch.auth.setLoading(false);
    },
  }),
};
