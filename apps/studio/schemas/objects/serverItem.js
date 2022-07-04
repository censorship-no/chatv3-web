export default {
  type: 'object',
  name: 'serverItem',
  title: 'Элемент списка серверов',
  fields: [
    {
      title: 'Server',
      name: 'server',
      type: 'reference',
      to: { type: 'server' }
    },

  ],
  preview: {
    select: {
      serverName: 'server.serverName',
      siteUrl: 'server.siteUrl',
      matrixUrl: 'server.matrixUrl',
      elementUrl: 'server.elementUrl'
    },
    prepare(data) {
      return {
        ...data,
        title: data.serverName,
        subtitle: data.matrixUrl
      }
    }
  }
}
