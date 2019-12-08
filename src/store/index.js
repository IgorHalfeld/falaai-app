import Vue from 'vue';
import Vuex from 'vuex';

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
      description: '',
      type: '',
      imageUrl: '',
      coords: {
        lat: null,
        lon: null,
      },
    },
    actions: {
      setImageUrl({ commit }, payload) {
        commit('SET_IMAGE_URL', payload);
      },
      setDescription({ commit }, payload) {
        commit('SET_DESC', payload);
      },
      setType({ commit }, payload) {
        commit('SET_TYPE', payload);
      },
      setCoords({ commit }, payload) {
        commit('SET_COORDS', payload);
      },
    },
    mutations: {
      SET_DESC: (state, payload) => {
        state.description = payload;
      },
      SET_IMAGE_URL: (state, payload) => {
        state.imageUrl = payload;
      },
      SET_TYPE: (state, payload) => {
        state.type = payload;
      },
      SET_COORDS: (state, payload) => {
        state.coords = payload;
      },
    },
  });

  return Store;
}
