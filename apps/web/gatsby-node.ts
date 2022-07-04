// const template = require("./src/templates/page.tsx")

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }
  const projects = result.data?.allSanityPage?.nodes || []

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  projects.forEach((node, index) => {
    const path = `${node.slug.current}`

    createPage({
      path,
      component: `${__dirname}/src/templates/pageTemplate.tsx`,
      context: { slug: path },
    })
  })
}
