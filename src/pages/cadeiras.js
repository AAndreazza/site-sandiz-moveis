import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

const POSTS_QUERY = graphql`
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
`

const Cadeiras = () => {
    const data = useStaticQuery(POSTS_QUERY)
    return(
        <div>
            {data.posts.edges.map( post => {
                return <h2><Link to={post.node.linkDirecionamento}>{post.node.nomeProduto}</Link></h2>
            })}
        </div>
    )
}

export default Cadeiras