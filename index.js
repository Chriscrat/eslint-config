const base = require("./base");
const { createConfig } = require("./configurable");

// Lazy-load ALL language-specific configurations
const getReact = () => require("./react");
const getNode = () => require("./node");
const getVue = () => require("./vue");
const getSvelte = () => require("./svelte");
const getAngular = () => require("./angular");
const getPython = () => require("./python");
const getData = () => require("./data");

module.exports = {
    // Base configuration (always available - no external dependencies)
    base,
    
    // Language-specific configurations (all lazy-loaded)
    get react() {
        return getReact();
    },
    get node() {
        return getNode();
    },
    get vue() {
        return getVue();
    },
    get svelte() {
        return getSvelte();
    },
    get angular() {
        return getAngular();
    },
    get python() {
        return getPython();
    },
    get data() {
        return getData();
    },
    
    // Configurable factory function
    createConfig,
    
    // Convenience exports with same lazy-loading
    configs: {
        base,
        get react() {
            return getReact();
        },
        get node() {
            return getNode();
        },
        get vue() {
            return getVue();
        },
        get svelte() {
            return getSvelte();
        },
        get angular() {
            return getAngular();
        },
        get python() {
            return getPython();
        },
        get data() {
            return getData();
        },
    },
};
