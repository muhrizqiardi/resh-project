import supabase from "../configs/supabase";
import _ from "lodash";

export const auth = {
  state: {
    signedIn: false,
    accountCreated: false,
    loading: true,
    magicLinkSent: false,
    error: null,
    session: null,
    user: {},
  },

  reducers: {
    setLoading(state, payload) {
      return _.cloneDeep({ ...state, loading: payload });
    },
    setAccountCreated(state, payload) {
      return _.cloneDeep({ ...state, accountCreated: payload });
    },
    setError(state, payload) {
      return _.cloneDeep({ ...state, error: payload });
    },
    setSession(state, payload) {
      console.log({ "the session": payload });
      return _.cloneDeep({ ...state, session: payload });
    },
    setMagicLinkSent(state, payload) {
      return _.cloneDeep({ ...state, magicLinkSent: payload });
    },
    setSignedIn(state, payload) {
      return _.cloneDeep({ ...state, signedIn: payload });
    },
    setUser(state, payload) {
      return _.cloneDeep({ ...state, user: payload });
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

    async handleSession(payload, rootState) {
      if (!rootState.auth.loading) dispatch.auth.setLoading(true);
      const session = supabase.auth.session();
      if (session) {
        dispatch.auth.setSession(session);
        dispatch.auth.getUser();
      } else {
        dispatch.auth.setLoading(false);
      }
    },

    async getUser(payload, rootState) {
      try {
        if (!rootState.auth.loading) dispatch.auth.setLoading(true);
        console.log("rootState", rootState);
        const { email } = rootState.auth.session.user;
        const { data, error, status } = await supabase
          .from("user")
          .select()
          .eq("email", email);
        console.log("query data", data);
        if (error && status !== 406) throw error;
        if (data.length > 0) {
          console.log("account is created, redirecting");
          dispatch.auth.setAccountCreated(true);
          dispatch.auth.setUser(data[0]);
          dispatch.auth.setLoading(false);
        } else {
          console.error("account isn't created");
        }
      } catch (error) {
        console.error("query error", error);
      }
    },

    // TODO: handle sign out
  }),
};
