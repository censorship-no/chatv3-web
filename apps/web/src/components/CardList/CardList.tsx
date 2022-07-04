import React from 'react'
import { PortableText } from "@portabletext/react";
import { CardList as CardListType, CardListB, PlainCard as PlainCardType } from '../../../typings/schema'
import { defaultComponents, instructionComponents } from '../serializers';

export function CardList({ cards = [], sectionTitle = "", sectionText }: CardListType | CardListB) {
  return (
    <>
      <h2 className="section-heading">
        <span>{sectionTitle}</span>
      </h2>
      <div className="top-block">
        {!!sectionText && (<div className="top-text">
          <PortableText value={sectionText} components={defaultComponents} />
        </div>)}
        </div>
      <ul className="card-container">
        {cards.map((card, index) => {
          return <PlainCard key={card.cardTitle} {...card} index={index + 1} />
        })}
      </ul>
    </>
  )
}

function PlainCard({ cardTitle, cardText, index }: PlainCardType & {index: number}) {
  return (<li className="card-item">
    <div className="card-number">{index > 9 ? index : `0${index}`}</div>
    <div className="card-item-text">
      <h3 className="card-item-text-name">{cardTitle}</ h3>
      <div className="card-item-text-desc">
        {!!cardText && <PortableText value={cardText} components={instructionComponents} />}
      </div>
    </div>
  </li>)
}


