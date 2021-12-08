import _ from "lodash";
import supabase from "../../configs/supabase";

const library = {
  state: {
    library: [],
    error: null,
    loading: false,
  },

  reducers: {
    setLoading(state, payload) {
      return _.cloneDeep({ ...state, loading: payload });
    },
    setError(state, payload) {
      return _.cloneDeep({ ...state, error: payload });
    },
    setLibraryState(state, payload) {
      let newLibrary = [...state.library, ...payload];
      return _.cloneDeep({ ...state, library: newLibrary });
    },
    addToLibraryState(state, payload) {
      let newLibrary = [...state.library, payload];
      console.log({newLibrary})
      return _.cloneDeep({ ...state, library: newLibrary });
    },
    removeFromLibraryState(state, payload) {
      let newLibrary = _.remove(state.library, {
        google_books_volume_id: payload,
      });
      return _.cloneDeep({ ...state, library: newLibrary });
    },
  },

  effects: (dispatch) => ({
    async getLibrary(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase.from("library_item").select();
        if (error) throw error;
        if (data) {
          console.log("success", data);
          dispatch.library.setLibraryState(data);
        }
      } catch (error) {
        console.error(error);
        dispatch.library.setError(error);
      } finally {
        dispatch.library.setLoading(false);
      }
    },
    async addToLibrary(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase
          .from("library_item")
          .insert([payload]);
        if (error) throw error;
        if (data) {
          console.log("success", data);
          dispatch.library.addToLibraryState(data[0]);
        }
      } catch (error) {
        console.error(error);
        dispatch.library.setError(error);
      } finally {
        dispatch.library.setLoading(false);
      }
    },
  }),
};

export default library;
