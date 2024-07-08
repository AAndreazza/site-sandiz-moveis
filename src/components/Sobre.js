import React from "react"
import IconFrete from '../images/iconFrete2.webp'
import IconGarantia from '../images/iconGarantia2.webp'
import IconParcelamento from '../images/iconParcelamento2.webp'
import IconViacredi from '../images/iconViacredi2.webp'

const Sobre = () => {
    return (
        <div class="relative isolate overflow-hidden py-10 sm:py-16">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-3xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-[#f3d2d2] sm:text-6xl">SANDIZ MÓVEIS</h2>
                    <h2 class="-mt-8 text-4xl font-bold tracking-tight text-[#a72626] sm:text-6xl">SANDIZ MÓVEIS</h2>
                    <p class="mt-6 text-xl leading-8 text-[#9b2323]">Fundada em 1976, somos uma loja com um conceito centrado na busca pela mais alta qualidade. Estabelecida em Timbó - SC, oferecemos <b>produtos com preço direto de fábrica</b>, valorizando cada cliente que nos escolhe para decorar seus lares.</p>
                </div>
                <div class="mt-14 text-[#9b2323] mx-auto max-x-none sm:max-w-6xl grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <img src={IconFrete} alt="icone de frete" className="mx-auto sm:-mt-2 sm:mb-4" />
                        <dt class="text-lg text-center mt-2 font-bold">FRETE GRÁTIS</dt>
                        <dt class="text-sm text-center">EM TIMBÓ E REGIÃO</dt>
                    </div>
                    <div>
                        <img src={IconGarantia} alt="icone de garantia" className="mx-auto" />
                        <dt class="text-lg text-center mt-2 font-bold">GARANTIA</dt>
                        <dt class="text-sm text-center">CONFORME CÓDIGO DO CONSUMIDOR</dt>
                    </div>
                    <div>
                        <img src={IconParcelamento} alt="icone de parcelamento" className="mx-auto mt-6 sm:mt-0" />
                        <dt class="text-lg text-center mt-2 font-bold">PARCELAMENTO</dt>
                        <dt class="text-sm text-center">EM ATÉ 12 VEZES NO CARTÃO</dt>
                    </div>
                    <div>
                        <img src={IconViacredi} alt="icone da viacredi" className="mx-auto h-24 w-24 mt-6 sm:mt-0" />
                        <dt class="text-lg text-center mt-2 font-bold">VENDAS VIACREDI</dt>
                        <dt class="text-sm text-center">EM ATÉ 36 VEZES</dt>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Sobre