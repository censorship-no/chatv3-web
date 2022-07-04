export default {
  type: 'object',
  name: 'cardListItem',
  title: 'Элемент списка карточек',
  fields: [
    {
      title: 'Карточка',
      name: 'plainCard',
      type: 'reference',
      to: { type: 'plainCard' }
    },

  ],
  preview: {
    select: {
      cardTitle: 'plainCard.cardTitle',

    },
    prepare(data) {
      return {
        ...data,
        title: data.cardTitle,
      }
    }
  }
}
