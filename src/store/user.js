import Vue from 'vue';

export const state = Vue.observable({
    name: "Florent"
})

export const getters = {};

export const mutations = {
    updateUserName(newName) {
        state.name = newName;
    }
}

export const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}