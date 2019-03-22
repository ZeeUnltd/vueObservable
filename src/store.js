import Vue from 'vue';

import User from "./store/user"
import Viewer from "./store/viewer";

class Store {
    constructor(obj) {
        for (let k in obj) {
            this[k] = obj[k]
        }
    }
}

const customStore =  new Store({
    user: User,
    viewer: Viewer
})

export default customStore;
