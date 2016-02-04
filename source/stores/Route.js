import Store from "./Store";
const {set, get} = Store.Symbols;


class RouteStore extends Store {
    constructor () {
        super();
        window.addEventListener("hashchange", () => {
            const path = window.location.hash.replace("#/", "");
            this[set]("path", path);
        });
    }
}

// Export a frozen instance of the Route store.
export default Object.freeze(new RouteStore());
