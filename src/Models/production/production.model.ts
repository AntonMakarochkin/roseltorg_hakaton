import {createEvent, createStore} from 'effector'

export const saveLogin = createEvent<string>();

export const $login = createStore('').on(saveLogin, (_, payloadLogin) => payloadLogin);
