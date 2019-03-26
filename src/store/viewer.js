import Vue from 'vue';

import User from "./user";

export const state = {}

export const getters = {}

export const mutations = {
    updateCount() { 
        User.mutations.updateCount()
        actions.sayHello()
    }
}

export const actions = {
    sayHello() {
        console.log("hello")
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}