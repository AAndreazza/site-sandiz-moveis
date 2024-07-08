import React from "react"
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import Sofa from '../images/sofaProdutos.webp'
import Poltrona from '../images/poltronaProdutos.webp'
import Mesa from '../images/salaJantarProdutos.webp'
import Colchao from '../images/colchaoProdutos.webp'

const Produtos = () => {
    return (
        <div>
            <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                <div class="relative aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block mx-4 my-4">
                    <img src={Mesa} alt="mesa redonda com cadeiras" class="h-full w-full object-cover object-center" />
                    <Link to='salajantar' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                        <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                            MESAS E CADEIRAS
                            <span aria-hidden='true'> &rarr;</span>
                        </h2>
                    </Link>
                </div>
                <div class="grid grid-cols-1 gap-y-8 mt-4">
                    <div class="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                        <img src={Sofa} alt="estofado" class="h-full w-full object-cover object-center" />
                        <Link to='estofados' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                            <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                                ESTOFADOS
                                <span aria-hidden='true'> &rarr;</span>
                            </h2>
                        </Link>
                    </div>
                    <div class="relative aspect-h-2 aspect-w-3 overflow-hidden rounded-lg mx-4">
                        <img src={Colchao} alt="colchao" class="h-full w-full object-cover object-center" />
                        <Link to='colchoes' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                            <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                                COLCHÕES
                                <span aria-hidden='true'> &rarr;</span>
                            </h2>
                        </Link>
                    </div>
                </div>
                <div class="relative aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg mx-4 my-4">
                    <img src={Poltrona} alt="poltrona cinza" class="h-full w-full object-cover object-center" />
                    <Link to='poltronas' className="absolute bottom-2 right-2 bg-slate-200 hover:bg-slate-300 opacity-80 rounded-full px-6 py-0 sm:px-8 sm:py-2">
                        <h2 className="text-black text-xs sm:text-base font-semibold leading-7">
                            POLTRONAS
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