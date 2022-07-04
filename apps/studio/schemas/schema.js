import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import page from './documents/page';
import serversSection from './documents/serversSection'
import siteSettings from './documents/siteSettings'
import messengerSection from './documents/messengerSection';
import websitesSection from './documents/websitesSection';
import cardList from './documents/cardList';
import cardList_b from './documents/cardList_b';
import instruction from './documents/instruction';

import messenger from './objects/messenger';
import messengerItem from './objects/messengerItem';
import website from './objects/website';
import websiteItem from './objects/websiteItem';
import server from './objects/server';
import serverItem from './objects/serverItem';
import heroTitleText from './objects/heroTitleText'
import sectionText from './objects/sectionText'
import linkInfo from './objects/linkInfo'
import linkBlock from './objects/linkBlock'
import equalitieBlock from './objects/equalitieBlock'
import footer from './objects/footer'
import cardListItem from './objects/cardListItem';
import plainCard from './objects/plainCard';
import qr_code from './objects/qr_codes'
import qrCodeList from './objects/qrCodeList'
import instructionsText from './objects/instructionsText';
import instructionStep from './objects/instructionStep';

export default createSchema({
  name: 'eq',
  types: schemaTypes.concat([
    /* Documents used as bigger parts of a page or page itself */
    siteSettings,
    page,
    serversSection,
    messengerSection,
    websitesSection,
    cardList,
    cardList_b,
    instruction,
    /* Types of objects appeared at the project */
    messenger,
    website,
    server,
    heroTitleText,
    sectionText,
    serverItem,
    linkInfo,
    linkBlock,
    messengerItem,
    websiteItem,
    equalitieBlock,
    footer,
    cardListItem,
    plainCard,
    qr_code,
    qrCodeList,
    instructionsText,
    instructionStep
  ])
})