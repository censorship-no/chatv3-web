import {createEvent, createStore} from 'effector'
import { ServerItem } from '../../typings/server'

export const $currentSever = createStore({} as ServerItem, { name: "currentServer" })
export const $servers = createStore([] as ServerItem[], { name: "servers" })

export const setCurrentEvent = createEvent<ServerItem>("setCurrent")
export const setServers = createEvent<Array<ServerItem>>("setServers")