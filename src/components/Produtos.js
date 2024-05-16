import React from "react"
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import Sofa from '../images/sofa.jpg'
import Cadeira from '../images/cadeira.jpg'
import Estante from '../images/estanteBege.jpg'
import Mesa from '../images/mesa.jpg'

const Produtos = () => {
    return (
        <div>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="relative aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block mx-4 my-4">
                    <img src={Mesa} alt="mesa" class="h-full w-full object-cover object-center" />
                    <Link to='mesas' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                        <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                            MESAS
                            <span aria-hidden='true'> &rarr;</span>
                        </h2>
                    </Link>
                </div>
                <div class="grid grid-cols-1 gap-y-8 mt-4">
                    <div class="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                        <img src={Estante} alt="estante" class="h-full w-full object-cover object-center" />
                        <Link to='mesas' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                            <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                                ESTANTES
                                <span aria-hidden='true'> &rarr;</span>
                            </h2>
                        </Link>
                    </div>
                    <div class="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                        <img src={Sofa} alt="sofá" class="h-full w-full object-cover object-center" />
                        <Link to='estofados' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                            <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                                ESTOFADOS
                                <span aria-hidden='true'> &rarr;</span>
                            </h2>
                        </Link>
                    </div>
                </div>
                <div class="relative aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={Cadeira} alt="Cadeira cinza" class="h-full w-full object-cover object-center" />
                    <Link to='cadeiras' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                        <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                            CADEIRAS
                            <span aria-hidden='true'> &rarr;</span>
                        </h2>
                    </Link>
                </div>
            </div>
            <div className='mt-4 sm:mt-10 flex items-center justify-center gap-x-6'>
                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank" className='mx-4 text-center rounded-xl bg-[#eb3334] sm:px-10 px-1 py-3 text-xs sm:text-lg font-bold text-white shadow-sm hover:bg-[#db5454] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db5454]'>CLIQUE AQUI E NOS CONTATE VIA WHATSAPP PARA UM ATENDIMENTO DIFERENCIADO</Link>
            </div>
        </div>
    )
}

export default Produtos