export default {
  type: 'object',
  name: 'websiteItem',
  title: 'Элемент списка средств обхода блокировок',
  fields: [
    {
      title: 'Website',
      name: 'website',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'website' },
        ]
      }]
    },
  ],
  preview: {
    select: {
      logo: 'website.logo',
      badge: 'website.badge',
      summary: 'website.summary',
      serverPickBlock: 'website.serverPickBlock',
      serverAction: 'website.serverAction',
      desktopLinkBlock: 'website.desktopLinkBlock',
      desktopInfoTitle: 'website.desktopInfoTitle',
      desktopInfoItems: 'website.desktopInfoItems',
      mobileLinkBlock: 'website.mobileLinkBlock',
      mobileLinkTitle: 'website.mobileLinkTitle',
      mobileInfoItems: 'website.mobileInfoItems',
      websiteName: 'website.name',

    },
    prepare(data) {
      return {
        ...data,
        title: data.websiteName,
      }
    }
  }
}
