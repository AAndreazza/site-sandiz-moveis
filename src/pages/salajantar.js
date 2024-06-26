import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import NavBar from '../components/NavBarPages/NavBarSalaJantar'
import Footer from '../components/Footer'

const options = {
    renderMark: {
        [MARKS.BOLD]: text => <strong className='text-gray-900 font-bold'>{text}</strong>
    },
    renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <h1 className='mt-16 mb-12 text-6xl font-bold'>{children}</h1>,
        [BLOCKS.HEADING_2]: (node, children) => <h2 className='mt-14 mb-8 text-4xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_3]: (node, children) => <h2 className='mt-10 mb-6 text-2xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_4]: (node, children) => <h2 className='mt-8 mb-4 text-xl font-bold'>{children}</h2>,
        [BLOCKS.HEADING_5]: (node, children) => <h2 className='mt-6 mb-2 text-lg font-bold'>{children}</h2>,
        [BLOCKS.HEADING_6]: (node, children) => <h2 className='mt-4 text-sm font-bold'>{children}</h2>,
        [BLOCKS.PARAGRAPH]: (node, children) => <p className='mt-8 text-xl text-gray-800 leading-8'>{children}</p>
    }
}

const POSTS_QUERY = graphql`
    query {
        posts: allContentfulSalasDeJantar(filter: {visivel: {eq: true}}) {
        edges {
            node {
                nomeProduto
                visivel
                imagemProduto {
                    resize(height: 800, width: 800) {
                    width
                    height
                    src
                    }
                }
                descricaoProduto {
                    raw
                }
                medidaProduto {
                    raw
                }
            }
        }
        }
    }
`

const SalaJantar = () => {

    const dados = useStaticQuery(POSTS_QUERY)

    return (
        <div className="bg-white">
            {/* ARRUMAR COR DE FUNDO */}
            <NavBar />
            <h2 class="mt-36 text-center text-4xl font-bold tracking-tight text-[#a72626] sm:text-6xl">SALAS DE JANTAR</h2>
            <div className='mt-4 border-t-2 border-[#a72626] sm:max-w-80 max-w-60 mx-auto pt-6'></div>
            <p class="text-center mx-6 sm:mx-auto text-xl leading-8 text-[#9b2323] max-w-5xl">Renove sua sala com os conjuntos da Sandiz Móveis. <br /> Escolha entre uma variedade de estilos disponíveis para entrega imediata ou encomenda. <br /> <b>Cadeiras e mesas vendidas separadamente!</b></p>
            <div className='mx-auto max-w-4xl mt-0 sm:mt-16 mb-20 grid grid-cols-1 gap-x-14 gap-y-0 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-2'>
                {dados.posts.edges.map(post => (
                    <div className='bg-gray-100 rounded-lg drop-shadow-xl mt-12 sm:mt-0 mx-8 sm:mx-0' key={post.node.nomeProduto}>

                        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='blank'>
                            <img className='aspect-[2/2] w-full rounded-t-lg object-cover' src={post.node.imagemProduto.resize.src} alt='imagem' />
                            {/*<h3 className='mx-4 mt-6 text-xl text-center font-semibold leading-6 text-gray-900'>{post.node.nomeProduto}</h3>*/}
                            <p className='-mt-4 text-center'>{documentToReactComponents(JSON.parse(post.node.descricaoProduto.raw), options)}</p>
                            <p className='-mt-6 mb-4 text-center'>{documentToReactComponents(JSON.parse(post.node.medidaProduto.raw), options)}</p>

                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default SalaJantar