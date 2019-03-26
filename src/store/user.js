import Vue from 'vue';

export const state = {
    count: 0
}

export const getters = {
    getCount() {
        return state.count;
    }
};

export const mutations = {
    updateCount() {
        state.count += 1;
    }
}

export const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}