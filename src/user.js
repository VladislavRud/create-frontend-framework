import { div } from "../framework/element";
import {onClick} from "../framework/event";
import state from "vuepress/lib/app/store";

export const User = ({ firstName, lastName }) =>
    div`${onClick(() => alert((firstName)))} Hello ${firstName} ${lastName}`;


const initialState = {firstName: 'Борис', lastName: 'Бритва'}

const changeName = (state, newState) => ({...state, newState});

const methods = {
    changeName : (state, newState) => ({...state, newState})
}