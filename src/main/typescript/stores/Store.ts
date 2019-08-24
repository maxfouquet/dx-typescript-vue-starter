import Vuex from 'vuex';

const state = {
    showUi: true
};

export const mutations = {
    TOGGLE_UI: (state) => {
        state.showUi = !state.showUi;
    }
};

export const actions = {
    toggleUi: (store) => {
        store.commit('TOGGLE_UI');
    },
};

export const getters = {
    showUi: state => state.showUi
};

export default new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions,
    strict: true
});