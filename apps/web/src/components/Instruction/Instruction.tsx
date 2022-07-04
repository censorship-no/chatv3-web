import { PortableText } from '@portabletext/react'
import { SectionText, InstructionStep as InstructionStepType } from '../../../typings/schema'

import React from 'react'
import { LinkBlock } from '../Messengers'
import { defaultComponents, instructionComponents } from '../serializers'

type InstructionType = {
  sectionTitle?: string;
  sectionText?: SectionText;
  items?: InstructionStepType[]
}

export function Instruction(props: InstructionType) {
  return (<>
    <h2 className="section-heading">
      <span>{props.sectionTitle}</span>
    </h2>

    <div className="top-block">
      {!!props.sectionText && (<div className="top-text">
        <PortableText value={props.sectionText} components={defaultComponents} />
      </div>)}
    </div>
    <div className="card-container">
      {props?.items?.map((card, index) => <InstructionStep {...card} key={card._id} index={index + 1} />)
      }
    </div>
  </>
  )
}


type InstructionStepPropsType = {

  index: number;

} & InstructionStepType

function InstructionStep(props: InstructionStepPropsType) {

  return (

    <div className={`card-item ${props.hasLinks ? 'has-links' : ''}`}>
      <div className="card-item-text">

        <h3 className="card-item-install-number">Шаг {props.index}. {props.instructionTitle}</h3>
        <p className="card-item-install-text"></p>
        {!!props.instructionText && (<PortableText value={props.instructionText} components={instructionComponents} />)}
      </div>
      <LinkBlock infoItems={props.links || []} isVisible={props.hasLinks} />
    </div>

  )


}

