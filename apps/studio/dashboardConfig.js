export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [

        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adsurov/equalitie',
            category: 'Code'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject'] },
      layout: { width: 'medium' }
    }
  ]
}
