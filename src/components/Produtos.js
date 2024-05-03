import React from "react"
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Sofa from '../images/sofa.jpg'
import Cadeira from '../images/cadeira.jpg'

const Produtos = () => {
    return (
        <div>
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
            <div class="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block mx-4 my-4">
                <img src="https://plus.unsplash.com/premium_photo-1676321688723-72ddb32096cf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
            </div>
            <div class="grid grid-cols-1 gap-y-8 mt-4">
                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                    <img src={Sofa} alt="sofá" class="h-full w-full object-cover object-center" />
                </div>
                <div class="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                    <img src="https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="h-full w-full object-cover object-center" />
                </div>
            </div>
            <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg mx-4 my-4">
                <img src={Cadeira} alt="Cadeira cinza" class="h-full w-full object-cover object-center" />
            </div>
        </div>
        <div className='mt-4 sm:mt-10 flex items-center justify-center gap-x-6'>
        <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank" className='mx-4 text-center rounded-xl bg-[#eb3334] sm:px-10 px-1 py-3 font-base sm:text-lg font-bold text-white shadow-sm hover:bg-[#db5454] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db5454]'>CLIQUE AQUI E NOS CONTATE VIA WHATSAPP PARA UM ATENDIMENTO DIFERENCIADO</Link>
                        </div>
        </div>
    )
}

export default Produtos