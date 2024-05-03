import React from 'react'
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Loja  from '../images/lojaTimbo.jpg'

const Hero = () => {
    return (
        <div className='bg-gray-300'>
            <div className='relative isolate overflow-hidden pt-36 pb-16 sm:pb-0 sm:pt-14'>
                <img src={Loja} alt='imagem loja' className='absolute inset-0 -z-10 h-full w-full object-cover' />
                    <div className='text-center mx-auto max-w-3xl py-22 sm:py-32'>
                        <h1 className='text-2xl font-bold tracking-tight text-white sm:text-5xl'>Com mais de quatro décadas de experiência, nossa loja de móveis oferece qualidade, variedade e estilo desde 1976</h1>
                        <div className='mt-10 flex items-center justify-center gap-x-6'>
                            <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank" className='rounded-xl bg-[#eb3334] px-10 py-3 text-lg font-bold text-white shadow-sm hover:bg-[#db5454] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db5454]'>ENTRAR EM CONTATO <span aria-hidden='true'>&rarr;</span></Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero