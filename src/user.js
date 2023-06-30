import { div } from "../framework/element";
import {onClick} from "../framework/event";
import state from "vuepress/lib/app/store";
import {createComponent} from "../framework";

const initialState = {firstName: 'Борис', lastName: 'Бритва'}
export const template = ({ firstName, lastName }) =>
    div`${onClick(() => alert((firstName)))} Hello ${firstName} ${lastName}`;

const methods = {
    changeName : (state, newState) => ({...state, newState})
}

export const User = createComponent({ template, methods, initialState });