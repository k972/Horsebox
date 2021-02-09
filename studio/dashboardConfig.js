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
                  buildHookId: '60228be89034190290b96cba',
                  title: 'Sanity Studio',
                  name: 'horsebox-studio',
                  apiId: 'ff513601-54b0-41ef-af33-ae65e9210487'
                },
                {
                  buildHookId: '60228be8cf5366eae5e8f251',
                  title: 'Blog Website',
                  name: 'horsebox',
                  apiId: 'b843b2f4-a8af-4ed8-9be9-58bdaed58b88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/k972/Horsebox',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://horsebox.netlify.app', category: 'apps'}
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
