export default {
  name: 'equalitieBlock',
  title: 'Секция eQualitie',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Иконка блока',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Заголовок блока',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Текст',
      type: 'string',
    },
    {
      name: 'hasLinksSection',
      title: 'Показывать блок со списком ссылок?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'links',
      type: 'array',
      title: 'Ссылки для отображения в блоке',
      description: 'Добавьте ссылки для отоюражения',
      of: [{ type: 'linkInfo' }],
    }
  ],
}
