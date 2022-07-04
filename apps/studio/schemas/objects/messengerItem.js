export default {
  type: 'object',
  name: 'messengerItem',
  title: 'Элемент списка мессенджеров',
  fields: [
    {
      title: 'Messenger',
      name: 'messenger',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          { type: 'messenger' },
        ]
      }]
    },
  ],
  preview: {
    select: {
      logo: 'messenger.logo',
      messengerName: 'messenger.name',
      badge: 'messenger.badge',
      summary: 'messenger.summary',
      serverPickBlock: 'messenger.serverPickBlock',
      serverAction: 'messenger.serverAction',
      desktopLinkBlock: 'messenger.desktopLinkBlock',
      desktopInfoTitle: 'messenger.desktopInfoTitle',
      desktopInfoItems: 'messenger.desktopInfoItems',
      mobileLinkBlock: 'messenger.mobileLinkBlock',
      mobileLinkTitle: 'messenger.mobileLinkTitle',
      mobileInfoItems: 'messenger.mobileInfoItems',
    },
    prepare(data) {
      return {
        ...data,
        title: data.messengerName,
      }
    }
  }
}
