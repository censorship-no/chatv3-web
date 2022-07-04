export default {
  name: 'plainCard',
  title: 'Карточки с текстом',
  type: 'document',
  description: 'Простая карточка с текстом и заголовком. Используется в FAQ и о проекте',
  fields: [
    {
      name: 'cardName',
      title: 'Имя карточки',
      type: 'string',
    },
    {
      name: 'cardTitle',
      title: 'Заголовок карточки',
      type: 'string',
    },
    {
      name: 'cardText',
      title: 'Текст карточки',
      type: 'instructionsText'
    },
  ],
}
