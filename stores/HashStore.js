export default new class HashStore {

    constructor () {
        window.addEventListener("hashchange", () => {
            console.log(arguments);
        });
    }

}
