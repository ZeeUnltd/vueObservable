import Vue from 'vue';

import {mutations as UserMutations} from "./user";

export const state = Vue.observable({})

export const getters = {}

export const mutations = {
    updateName(newName) { 
        UserMutations.updateUserName(newName)
    }
}

export const actions = {}

export default {
    state,
    getters,
    mutations,
    actions
}