import React from 'react'
import { graphql } from 'gatsby'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


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
        [BLOCKS.PARAGRAPH]: (node, children) => <p className='mt-8 text-xl text-gray-800 leading-8'>{children}</p>,
    }
}

const Cadeira = ({ data, ...props}) => {
    const conteudoRichJson = JSON.parse(data.contentfulCadeiras.descricaoProduto.raw)

    return (
        <div class="bg-white px-6 mt-12 mb-12 sm:mt-16 sm:mb-16 lg:px-8">
            <h1>{data.contentfulCadeiras.nomeProduto}</h1>
            <h3>Valor = {data.contentfulCadeiras.valorProduto}</h3>
            <img src={data.contentfulCadeiras.imagemProduto.resize.src} className='mt-10 mb-10 mx-auto sm:max-w-xl max-w-xs rounded-2xl' alt='imagem' />
            <div>{documentToReactComponents(conteudoRichJson, options)}</div>
            
            {/*
            <div class="mx-auto max-w-4xl text-base leading-7 text-gray-900">
                <p class="text-xl font-semibold text-center leading-7 text-[#8e459c]">{data.contentfulPost.categoria}</p>
                <h1 class="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">{data.contentfulPost.titulo}</h1>
                <img src={data.contentfulPost.imagemApresentacao.resize.src} className='mt-10 mb-10 mx-auto sm:max-w-xl max-w-xs rounded-2xl' alt='imagem' />
                
            </div>

            <pre>{JSON.stringify(props, null, 2)}</pre>
             */}
        </div>
    )
}

export const pageQuery = graphql`
    query ($slug: String!) {
        contentfulCadeiras(linkDirecionamento: {eq: $slug}, visivel: {eq: true}) {
        nomeProduto
        valorProduto
        descricaoProduto {
            raw
        }
        imagemProduto {
            resize(height: 100, width: 100) {
                src
            }
        }
        }
    }
`

export default Cadeira