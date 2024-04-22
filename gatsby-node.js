const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Criar páginas para cadeiras
  const createPageCadeiras = async () => {
    const cadeirasTemplate = path.resolve('src/templates/cadeira.js');
    const result = await graphql(`
      query {
        allContentfulCadeiras(filter: {visivel: {eq: true}}) {
          edges {
            node {
              linkDirecionamento
            }
          }
        }
      }
    `);

    result.data.allContentfulCadeiras.edges.forEach(({ node }) => {
      createPage({
        path: node.linkDirecionamento,
        component: cadeirasTemplate,
        context: {
          slug: node.linkDirecionamento,
        },
      });
    });
  };

  // Criar páginas para estofados
  const createPageEstofados = async () => {
    const estofadosTemplate = path.resolve('src/templates/estofado.js');
    const result = await graphql(`
      query {
        allContentfulEstofados(filter: {visivel: {eq: true}}) {
          edges {
            node {
              linkDirecionamento
            }
          }
        }
      }
    `);

    result.data.allContentfulEstofados.edges.forEach(({ node }) => {
      createPage({
        path: node.linkDirecionamento,
        component: estofadosTemplate,
        context: {
          slug: node.linkDirecionamento,
        },
      });
    });
  };

  await createPageCadeiras();
  await createPageEstofados();
};
