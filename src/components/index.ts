import Vue from "vue";
import VueTyper from "./components/VueTyper/VueTyper.vue";

/**
 * Fügt eine "install" function bei MLiveForce hinzu
 *
 * Weitere Infos:
 *      https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Packaging-Components-for-npm
 */
const VueTyperElements = {
    install(vue: typeof Vue): void {
        vue.component('s-typer', VueTyper);
    },
};

if (typeof window !== 'undefined' && window.Vue) {
    // @ts-ignore
    window.Vue.use(VueTyperElements, {});
}

export { VueTyper };
export default VueTyperElements;