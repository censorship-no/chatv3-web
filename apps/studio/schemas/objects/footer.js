export default {
  name: 'footer',
  title: 'Футер',
  type: 'document',
  fields: [
    {
      name: 'footerTitle',
      title: 'Имя футера',
      type: 'string',
      description: 'Имя футера для удобства'
    },
    {
      name: 'logo',
      title: 'Лого',
      type: 'image',
    },
    {
      name: 'logoAltText',
      title: 'Альтернативный текст к логотипу',
      type: 'string'
    },
    {
      name: 'footerTagline',
      title: 'Подзаголовок футера',
      type: 'sectionText',

    },
    {
      name: 'footerLicenseInfo',
      title: 'Инфор о лицензии',
      type: 'sectionText',
    },
  ],
  preview: {
    select: {
      footerTitle: 'footerTitle'
    },
    prepare(data) {
      return {
        ...data,
        title: data.footerTitle,
      }
    }
  }
}
