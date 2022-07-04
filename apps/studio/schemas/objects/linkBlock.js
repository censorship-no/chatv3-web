export default {
  name: 'linkBlock',
  title: 'Блок ссылок',
  type: 'object',
  fields: [
    {
      name: 'linkBlockTitle',
      title: 'Заголовок блока ссылок',
      type: 'string'
    },
    {
      title: 'Ссылка',
      name: 'linkItem',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'linkInfo' },
        ]
      }],
    }
  ],
  // preview: {
  //   select: {
  //     linkBlockTitle: 'linkBlock.linkBlockTitle',
  //   },
  //   prepare(data) {
  //     return {
  //       ...data,
  //       title: data.linkBlockTitle
  //     }
  //   }
  // }
}