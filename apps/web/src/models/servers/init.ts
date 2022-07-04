import { $currentSever, $servers, setCurrentEvent, setServers } from "./servers"

$currentSever.on(setCurrentEvent, (_, payload) => payload)

$servers.on(setServers, (_, payload) => payload)