import _ from "lodash";
import moment from "moment";
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
      let newLibrary = [...payload];
      return _.cloneDeep({ ...state, library: newLibrary });
    },
    addToLibraryState(state, payload) {
      let newLibrary = [...state.library, payload];
      console.log({ newLibrary });
      return _.cloneDeep({ ...state, library: newLibrary });
    },
    removeFromLibraryState(state, payload) {
      let newLibrary = [...state.library];
      _.remove(newLibrary, {
        library_item_id: payload.library_item_id,
      });
      return _.cloneDeep({ ...state, library: newLibrary });
    },
    modifyItemFromLibraryState(state, payload) {},
  },

  effects: (dispatch) => ({
    async getLibrary(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase
          .from("library_item")
          .select()
          .match({ username: rootState.auth.user.username });
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
          dispatch.library.getLibrary();
        }
      } catch (error) {
        console.error(error);
        dispatch.library.setError(error);
      } finally {
        dispatch.library.setLoading(false);
      }
    },
    async removeFromLibrary(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase
          .from("library_item")
          .delete()
          .match({
            library_item_id: payload.library_item_id,
          });
        if (error) throw error;
        if (data) {
          console.log("success", data);
          dispatch.library.getLibrary();
        }
      } catch (error) {
        console.error(error);
        dispatch.library.setError(error);
      } finally {
        dispatch.library.setLoading(false);
      }
    },
    async startReading(payload, rootState) {
      if (!rootState.loading) dispatch.library.setLoading(true);
      try {
        const { data, error } = await supabase.from("library_item").upsert({
          username: payload.username,
          google_books_volume_id: payload.google_books_volume_id,
          current_page: 0,
          started_reading: moment.utc().format(),
        });
        if (error) throw error;
        if (data) {
          console.log("success", data);
          dispatch.library.getLibrary();
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
