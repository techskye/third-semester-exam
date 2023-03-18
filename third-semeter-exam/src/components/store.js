import { createStore } from "vuex";
const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    counter(state) {
      return state.count;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    reset({ commit }) {
      commit("reset");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    $event({ commit }) {
      commit("setValue");
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    reset(state) {
      state.count = 0;
    },
    decrement(state) {
      state.count--;
    },
    setValue(state) {
      state.$event.val;
    },
  },
});
export default store;
