// These are really private symbols that wont even be exposed to child types.
const [data, listeners, notify] = [Symbol(), Symbol(), Symbol()];

//
const Symbols = Object.freeze({
    delete: Symbol(),
    get: Symbol(),
    set: Symbol()
});

//
class Store {
    static get Symbols () {
        return Symbols;
    }

    constructor () {
        if (this.constructor.name === "Store") {
            throw new Error(`cannot create new instance of "Store" type`);
        }

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

    [notify] (key, value) {
        const ns = this.constructor.name.replace("Store", "");
        const nsKey = `${ns}:${key}`;
        this[listeners].forEach(listener => {
            try {
                listener.onChange.call(listener, nsKey, value);
            } catch (error) {
                console.error(error.message, JSON.stringify(error, null, 2));
            }
        });
    }

    [Symbols.delete] (key) {
        this[data].delete(key);
        this[notify](key, undefined);
        return this;
    }

    [Symbols.get] (key, defaultValue = null) {
        return this[data].get(key) === undefined || defaultValue;
    }

    [Symbols.set] (key, value) {
        this[data].set(key, value);
        this[notify](key, value);
        return this;
    }
}

export default Object.freeze(Store);
