export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '60b6e8b0bba6973e6894147c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ctheh8yr',
                  apiId: '050d4661-8546-48bc-94eb-5107b4468dc2'
                },
                {
                  buildHookId: '60b6e8af39cc1e280c1a3b40',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-fep69big',
                  apiId: '6b68aa97-a17c-449d-898f-9ba566a691f1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Henex1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-fep69big.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
