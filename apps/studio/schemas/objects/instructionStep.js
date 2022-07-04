export default {
  name: 'instructionStep',
  title: 'Шаги инструкций',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Название',
      type: 'string'
    },
    {
      name: 'instructionTitle',
      title: 'Заголовок',
      type: 'string'
    },
    {
      name: 'instructionText',
      title: 'Текст',
      type: 'instructionsText'
    },
    {
      name: 'hasLinks',
      title: 'Показывать ли ссылки?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'links',
      title: 'Ссылки для отображения',
      type: 'array',
      of: [{ type: 'linkBlock' }]
    },
  ]
}
