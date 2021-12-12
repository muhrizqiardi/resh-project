import _ from "lodash";
import moment from "moment";
import supabase from "../../configs/supabase";

const userActivity = {
  state: {
    feed: [],
    loading: true,
    error: null,
  },
  reducers: {
    setUserActivityFeedState(state, payload) {
      return _.cloneDeep({ ...state, feed: payload });
    },
    setError(state, payload) {
      return _.cloneDeep({ ...state, error: payload });
    },
    setLoading(state, payload) {
      return _.cloneDeep({ ...state, loading: payload });
    },
  },
  effects: (dispatch) => ({
    async getActivityFeed(payload, rootState) {
      if (!rootState.loading) dispatch.userActivity.setLoading(true);
      try {
        const { data, error } = await supabase
          .from("user_activity")
          .select()
          .match({ username: rootState.auth.user.username })
          .order("occured_at", { ascending: false });
        if (error) throw error;
        if (data) {
          dispatch.userActivity.setUserActivityFeedState(data);
        }
      } catch (error) {
        dispatch.userActivity.setError(error);
      } finally {
        dispatch.userActivity.setLoading(false);
      }
    },
    async addToActivityFeed(payload, rootState) {
      if (!rootState.loading) dispatch.userActivity.setLoading(true);
      try {
        const { data, error } = await supabase
          .from("user_activity")
          .insert([payload])
          .match({ username: rootState.auth.user.username });
        if (error) throw error;
        if (data) {
          dispatch.userActivity.getActivityFeed();
        }
      } catch (error) {
        dispatch.userActivity.setError(error);
      } finally {
        dispatch.userActivity.setLoading(false);
      }
    },
  }),
};

export default userActivity;
