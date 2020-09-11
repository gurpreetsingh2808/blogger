// exports.createPages = async function ({ actions, graphql }) {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: { fields: formatter___date, order: DESC })
//       edges {
//         node {
//           formatter {
//             slug
//           }
//           id
//         }
//       }
//     }
//   `

//   // Create paginated pages for posts

//   const postsPerPage = 2
//   const numPages = data.allMdx.edges.length / postsPerPage

//   Array.from({ length: numPages }).forEach((_, i) => {
//     actions.createPages({
//       path: i === 0 ? `/` : `/${i + 1}`,
//       component: require.resolve("./src/templates/allPosts.js"),
//       context: {
//         limit: postsPerPage,
//         skip: i * postsPerPage,
//         currentPage: i + 1,
//       },
//     })
//   })

//   // Create single blog post
//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.formatter.slug
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       component: require.resolve(`./src/emplates/singlePost.js`),
//       context: { id },
//     })
//   })
// }
