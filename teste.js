/*const { graphql } = require('gatsby')
const path = require('path')

const createPageCadeiras = ({ graphql, actions: { createPage } }) => {
    const cadeirasTemplate = path.resolve('src/templates/cadeira.js')

    posts.data.cadeiras.edges.forEach(post => {
        createPage({
            path: post.node.linkDirecionamento,
            component: cadeirasTemplate,
            context: {
                slug: post.node.linkDirecionamento
            }
        })
    })
}

const createPageEstofados = ({ graphql, actions: { createPage } }) => {
    const estofadosTemplate = path.resolve('src/templates/estofado.js')

    posts.data.estofados.edges.forEach(post => {
        createPage({
            path: post.node.linkDirecionamento,
            component: estofadosTemplate,
            context: {
                slug: post.node.linkDirecionamento
            }
        })
    })
}

exports.createPageCadeiras = async ({ graphql, actions }) => {
    const { createPage } = actions

    const posts = await graphql(`
    query MyQuery {
        cadeiras: allContentfulCadeiras {
          edges {
            node {
              nomeProduto
              linkDirecionamento
              valorProduto
              descricaoProduto {
                raw
              }
              imagemProduto {
                resize(height: 300, width: 300) {
                  src
                }
              }
            }
          }
        }
        estofados: allContentfulEstofados {
          edges {
            node {
              nomeProduto
              linkDirecionamento
              valorProduto
              descricaoProduto {
                raw
              }
              imagemProduto {
                resize(width: 10, height: 10) {
                  src
                }
              }
            }
          }
        }
      }
    `)

    const cadeirasTemplate = path.resolve('src/templates/cadeira.js')

    posts.data.cadeiras.edges.forEach(post => {
        createPage({
            path: post.node.linkDirecionamento,
            component: cadeirasTemplate,
            context: {
                slug: post.node.linkDirecionamento
            }
        })
    })
    createPageEstofados(props)
}*/

const path = require('path')
const { graphql } = require("gatsby");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts = await graphql(`
  query {
    posts: allContentfulCadeiras(filter: {visivel: {eq: true}}) {
      edges {
        node {
          nomeProduto
          linkDirecionamento
          valorProduto
          visivel
          imagemProduto {
            resize(height: 10, width: 10) {
              width
              height
              src
            }
          }
          descricaoProduto {
            raw
          }
        }
      }
    }
  }
  `)
  
  const postTemplate = path.resolve('src/templates/cadeira.js')
  posts.data.posts.edges.forEach(post => {
    createPage({
      path: post.node.linkDirecionamento,
      component: postTemplate,
      context: {
        slug: post.node.linkDirecionamento
      }
    })
  })
}