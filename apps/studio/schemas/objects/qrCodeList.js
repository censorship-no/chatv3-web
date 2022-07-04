import { string } from "prop-types"

export default {
  type: 'object',
  name: 'qrCodeList',
  title: 'Список QR кодов',
  fields: [
    {
      title: 'List name',
      name: 'listName',
      type: 'string'
    },

    {
      title: 'Элементы списка',
      name: 'qr',
      type: 'array',
      of: [{
        type: 'reference',
        to: { type: 'qr_code' }
      }]
    },

  ],
  preview: {
    select: {
      name: 'listName',
    },
    prepare(data) {
      return {
        ...data,
        title: data.name
      }
    }
  }
}
