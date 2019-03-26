import Vue from 'vue';

import User from "./store/user"
import Viewer from "./store/viewer";

class Store {
    constructor(obj) {
        this._hydrateStore(obj)
    }

    _hydrateStore(obj) {
        for (let k in obj) {
            this[k] = {
                state: Vue.observable(obj[k].state || {}),
                getters: obj[k].getters || {},
                mutations: obj[k].mutations || {},
                actions: obj[k].actions || {}
            };
        }
    }
}

const customStore =  new Store({
    user: User,
    viewer: Viewer
})

Vue.prototype.$store = customStore;

export default customStore;
