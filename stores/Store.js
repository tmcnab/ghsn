import { DEL, GET, SET } from "./Symbols";
import { Component } from "react";


const [data, listeners] = [Symbol(), Symbol()];


export default class Store {
    constructor () {
        this[listeners] = new Set();
        this[data] = new Map();
    }

    on (listener) {
        if (listener["onChange"] instanceof Function) {
            this[listeners].add(listener);
        } else {
            throw new TypeError("receiving type must have function 'onChange' of type Function");
        }
    }

    off (listener) {
        if (listener["onChange"] instanceof Function) {
            if (this[listeners].delete(listener) === false) {
                throw new TypeError("cannot remove listener that was not previously registered");
            }
        } else {
            throw new TypeError("receiving type must have function 'onChange' of type Function");
        }
    }

    [DEL](key) {
        return this[data].delete(key);
    }

    [GET](key, default = null) {
        return JSON.parse(this[data].get(key)) || default;
    }

    [SET](key, value) {
        return this[data].set(key, JSON.stringify(value));
    }
}
