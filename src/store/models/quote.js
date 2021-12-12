import _ from "lodash";
import moment from "moment";
import supabase from "../../configs/supabase";

const quote = {
  state: {
    error: null,
    loading: false,
  },
  reducers: {
    setQuoteState(state, payload) {
      return _.cloneDeep({ ...state, quote: payload });
    },
    setError(state, payload) {
      return _.cloneDeep({ ...state, error: payload });
    },
  },
  effects: (dispatch) => ({
    async getQuote(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase.from("quote").select();
        if (error) throw error;
        if (data) {
          console.log();
          // dispatch.quote.setQuoteState(data)
        }
      } catch (error) {
        dispatch.quote.setError(error)
      } finally {
        dispatch.quote.setLoading(false);
      }
    },
  }),
};
