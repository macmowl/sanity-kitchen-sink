export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '639a506a2bd38268ea94fe9b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-w88ra8pi',
                  apiId: '6b672a6a-335c-4484-9c29-cc7ce8559591'
                },
                {
                  buildHookId: '639a506b9605125c99813273',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-5so7559k',
                  apiId: '49d7f864-f94c-4f85-87b0-eb73d77e96c8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/macmowl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-5so7559k.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
