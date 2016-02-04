import Github from "github";
import Store from "./Store";
const set = Store.Symbols.set;


class SecurityStore extends Store {

    constructor () {
        // if (window.location.protocol !== "https:") {
        //     window.location.assign(window.location.href.replace("http", "https"));
        // }
        super();
        this[set]("isSignedIn", false);
    }

    signIn () {

    }

}

export default Object.freeze(new SecurityStore());
