import React from "react"
import IconFrete from '../images/iconFrete.png'
import IconGarantia from '../images/iconGarantia.png'
import IconParcelamento from '../images/iconParcelamento.png'
import IconViacredi from '../images/iconViacredi1.png'

const Sobre = () => {
    return (
        <div class="relative isolate overflow-hidden py-10 sm:py-12">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-3xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">SANDIZ MÓVEIS</h2>
                    <p class="mt-6 text-xl leading-8 text-gray-900">Fundada em 1976, somos uma loja com um conceito centrado na busca pela mais alta qualidade. Estabelecida em Timbó - SC, oferecemos <b>produtos com preço direto de fábrica</b>, valorizando cada cliente que nos escolhe para decorar seus lares.</p>
                </div>
                <div class="mt-14 mx-auto max-x-none sm:max-w-6xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                            <img src={IconFrete} alt="truck--v1" className="mx-auto sm:-mt-2 sm:mb-4" />
                            <dt class="text-lg text-center text-gray-900 mt-2 font-bold">FRETE GRÁTIS</dt>
                            <dt class="text-sm text-center text-gray-900">EM TIMBÓ E REGIÃO</dt>
                        </div>
                        <div>
                            <img src={IconGarantia} alt="truck--v1" className="mx-auto" />
                            <dt class="text-lg text-center text-gray-900 mt-2 font-bold">GARANTIA</dt>
                            <dt class="text-sm text-center text-gray-900">CONFORME CÓDIGO DO CONSUMIDOR</dt>
                        </div>
                        <div>
                            <img src={IconParcelamento} alt="truck--v1" className="mx-auto mt-6 sm:mt-0" />
                            <dt class="text-lg text-center text-gray-900 mt-2 font-bold">PARCELAMENTO</dt>
                            <dt class="text-sm text-center text-gray-900">EM ATÉ 12 VEZES NO CARTÃO</dt>
                        </div>
                        <div>
                            <img src={IconViacredi} alt="truck--v1" className="mx-auto h-24 w-24 mt-6 sm:mt-0" />
                            <dt class="text-lg text-center text-gray-900 mt-2 font-bold">VENDAS VIACREDI</dt>
                            <dt class="text-sm text-center text-gray-900">EM ATÉ 36 VEZES</dt>
                        </div>
                        
                    </div>
            </div>
        </div>

    )
}

export default Sobre