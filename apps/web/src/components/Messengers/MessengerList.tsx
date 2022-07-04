import React, { useState } from "react";
import { PortableTextBlock } from "@portabletext/types";
import { PortableText } from "@portabletext/react";
import { useStore } from 'effector-react/scope';
import { $currentSever, $servers } from "../../models/servers";

import { GatsbyImage } from "gatsby-plugin-image";
import { Messenger, QrCode, SanityKeyed, LinkBlock as LinkBlockType, SanityImageHotspot, SanityImageCrop, SanityImageAsset, SectionText, Website } from '../../../typings/schema'
import { ServerItem } from "../../typings/server";
import { Link } from "gatsby";


type MessengerListProps = {
  title: string;
  text: SectionText;
  sectionItems?: (Messenger & { _id: string })[] | (Website & { _id: string })[];
  iconURL: string;
}

export function MessengerList({ title,
  text,
  sectionItems,
  iconURL }: MessengerListProps) {

  return (<>
    <h2 className="section-heading">
      <span>
        <img src={iconURL} alt="" role="presentation" />
        {title}
      </span>
    </h2>
    {!!text && <PortableText value={text} />}
    <div className="card-container">
      {sectionItems?.map(item => <MessengerCard key={item._id}
        name={item.name}
        summary={item.summary}
        badge={item.badge}
        desktopInfoItems={item.desktopInfoItems}
        desktopInfoTitle={item.desktopInfoTitle}
        desktopLinkBlock={item.desktopLinkBlock}
        mobileInfoItems={item.mobileInfoItems}
        mobileLinkBlock={item.mobileLinkBlock}
        mobileInfoTitle={item.mobileInfoTitle}
        serverAction={item.serverAction}
        serverPickBlock={item.serverPickBlock}
        hasQRCodeLinks={item.hasQRCodeLinks}
        qrCodes={item.qrCodes}
        logo={item.logo}
      />)}
    </div>
  </>
  )
}

type MessengerCardProps = {
  name?: string;
  summary?: string;
  badge?: string;
  logo?: {
    asset: SanityImageAsset & { altText?: string | null, }
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }

  desktopInfoItems?: SanityKeyed<LinkBlockType>[],
  desktopInfoTitle?: string;
  desktopLinkBlock?: boolean;

  mobileInfoItems?: SanityKeyed<LinkBlockType>[],
  mobileLinkBlock?: boolean;
  mobileInfoTitle?: string;

  serverAction?: string;
  serverPickBlock?: boolean;
  hasQRCodeLinks?: boolean;
  qrCodes?: QrCode[]
}

function MessengerCard(props: MessengerCardProps) {
  const generalServer = useStore($currentSever)
  const servers = useStore($servers)

  const [currentServer, setCurrentServer] = useState<ServerItem>(generalServer.matrixUrl ? generalServer : servers[0])
  const [currentDeltaServer, setCurrentDeltaServer] = useState<QrCode>(props.qrCodes?.length ? props.qrCodes[0] : {} as QrCode)
  const options = servers.map((item) => <option value={item.matrixUrl} key={item.matrixUrl}>{item.serverName}</option>)
  const qrOptions = props.qrCodes?.map(item => <option value={item.url} key={item.url}>{item.relatedServer ? item.relatedServer.serverName : item.url}</option>)

  const handleSelectChange = (item: React.ChangeEvent<HTMLSelectElement>) => {
    const server = servers.find(server => server.matrixUrl === item.currentTarget.value)
    if (!server) return;
    setCurrentServer(server)
  }

  const handleQRChange = (item: React.ChangeEvent<HTMLSelectElement>) => {
    const code = props.qrCodes?.find(el => el.url === item.currentTarget.value)
    if (!code) return;
    setCurrentDeltaServer(code)
  }

  const registerURL = currentServer!.matrixUrl!.replace('matrix.', 'https://chat.')

  return (<div className="card-item">
    {!!props.logo && <GatsbyImage
      image={props.logo.asset.gatsbyImageData}
      alt={props.logo.asset.altText || ""}
      className="card-item-logo"
    />}
    <div className="card-item-text">
      <p className="card-item-text-badge">
        {props.badge}
      </p>
      <p className="card-item-text-name">{props.name}</p>
      <p className="card-item-text-desc">
        {props.summary}
      </p>

      {!!props.serverPickBlock && (<div className="card-item-server">
        <span>Сервер</span>
        <div className="card-item-server-choice">
          <input
            type="text"
            className="text-input"
            readOnly={true}
            value={currentServer.matrixUrl}
          />&nbsp;
          <select className="select" onChange={handleSelectChange}>
            {options}
          </select>
        </div>
        <a
          href={registerURL}
          target="_blank"
          className="btn btn-small"
          rel="noreferrer"
        >
          {props.serverAction}
        </a>
      </div>)}
      {props.hasQRCodeLinks && (
        <div className="card-item-server">
          <span>Сервер</span>
          <div className="card-item-server-choice">
            <select className="select" onChange={handleQRChange}>
              {qrOptions}
            </select>
          </div>
          <a href={currentDeltaServer.url} target="_blank"
            rel="noreferrer" className="btn btn-small">
            {props.serverAction}
          </a>
        </div>
      )}

      <div className="card-item-download">
        <LinkBlock title={props.desktopInfoTitle} infoItems={props.desktopInfoItems} isVisible={props.desktopLinkBlock} />
        <LinkBlock title={props.mobileInfoTitle} infoItems={props.mobileInfoItems} isVisible={props.mobileLinkBlock} />
      </div>
    </div>
  </div>)
}

type LinkBlockProps = {
  title?: string;
  infoItems?: SanityKeyed<LinkBlockType>[];
  isVisible?: boolean;
}

export function LinkBlock({ title, infoItems, isVisible }: LinkBlockProps) {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="cart-item-download-links">
      {!!title && (<h3 className="middle-heading">{title}</h3>)}
      {infoItems?.map(item =>
      (<ul className="card-item-download-row" key={item.linkBlockTitle}>
        <h4>{item.linkBlockTitle}</h4>
        <div className="btn-group">
          {item.linkItem?.map(el =>
          (<li key={el.linkLabel}>
            {isInternalLink(el.linkUrl) ? (
              <Link
                to={el.linkUrl || ""}
                className="btn btn-small">
                {el.linkLabel}
              </Link>)
              :
              (<a
                href={el.linkUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-small"
              >
                {el.linkLabel}
              </a>)}
          </li>)
          )}
        </div>
      </ul>)
      )}
    </div>)
}


function isInternalLink(url?: string): boolean {
  if (!url) return false;
  if (typeof window !== "undefined") {
    const tmp = document.createElement('a');
    tmp.href = url;
    return tmp.host === window.location.host;
  }

  return /^\//.test(url)
}