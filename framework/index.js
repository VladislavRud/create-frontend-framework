import * as snabbdom from 'snabbdom';
import props from "snabbdom/src/modules/props";
const patch = snabbdom.init([
    require("snabbdom/modules/eventlisteners").default
])

export const init = (selector, component) => {
        const app = document.querySelector(selector);
        patch(app, component.template)
}

let state = {};

export const createComponent = ({
    template,
    methods = {},
    initialState = {},
}) => {
    state = initialState;

    const mappedMethods =  Object.keys (methods).reduce(
        (acc, key) => ({
            ...acc,
            [key]: (...args) => {
                state = methods[key](state, ...args);
                console.log(state);
                return state
            }
        }),
        {}
    );
    return props => template({ ...props, ...state, methods:mappedMethods })
}

