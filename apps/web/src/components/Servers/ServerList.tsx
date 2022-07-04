import React, { useEffect } from "react"
import { PortableTextBlock } from "@portabletext/types"
import { PortableText } from "@portabletext/react"
import { ServerItem } from '../../typings/server'
import { setCurrentEvent, setServers } from "../../models/servers"
import { Link } from "gatsby"
import { useEvent } from 'effector-react/scope'
import { SanityBlock, SectionText } from "../../../typings/schema"


type ServerListProps = {
  title: string
  text: string | SectionText;
  sectionItems: { server?: ServerItem }[]
}

export function ServerList({ title, text, sectionItems }: ServerListProps) {
  useCurrentServer(sectionItems)
  useServersList(sectionItems.map(item => ({ ...item.server})))
  const items = sectionItems.map((item, index) => (
    <ServerListItem {...item.server} key={item.server?._id} />
  ))

  return (
    <>
      <h2 className="section-heading">
        <span>{title}</span>
      </h2>
      <div className="server-choice">
        <PortableText value={text as (SanityBlock & { _key: string; }) | (SanityBlock & { _key: string; })[]} />
        <ul className="btn-list">{items}</ul>
      </div>
    </>
  )
}

function ServerListItem(item: ServerItem) {
  if (!item.siteUrl) {
    return null;
  }
  return (
    <li>
      <Link
        to={item.siteUrl}
        className="btn"
        key={`${item.serverName}${item.siteUrl}`}
      >
        {item.serverName}
      </Link>
    </li>
  )
}


function useCurrentServer(items: { server?: ServerItem }[]) {
  const setCurrent = useEvent(setCurrentEvent)
  try {

    const [server, host] = window.location.hostname.split('.')
    if (!host) return;

    const currentServer = items.find(item => item.server && item.server?.siteUrl?.includes(server))
    if (currentServer && currentServer.server) {
      setCurrent(currentServer.server)
    }
  } catch (err) {
    console.log(err)
  }
}

function useServersList(items: ServerItem[]) {
  const set = useEvent(setServers)
  set(items)
}