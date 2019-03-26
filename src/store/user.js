import Vue from 'vue';

export const state = {
    name: "sub number 1"
}

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