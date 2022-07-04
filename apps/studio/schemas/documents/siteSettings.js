export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Настройки сайта',
  __experimental_actions: [
    'create',
    // 'delete',
    'update',
    'publish'
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe site for search engines and social media.'
    },
    {
      name: 'siteURL',
      title: 'Адрес сайта',
      description: 'Адрес сайта для SEO',
      type: 'url'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes the website.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'logo',
      title: 'Логотип в шапке',
      type: 'image'
    },
    {
      title: 'Ссылки в шапке',
      name: 'links',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'linkInfo' },
        ]
      }],
    }
  ]
}
