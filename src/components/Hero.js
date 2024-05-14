import React from 'react'
import { Link } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Foto2 from '../images/foto2.jpg'
import Foto3 from '../images/foto3.jpg'

const Hero = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autosplaySpeed: 50
    };

    return (
        <div className='overflow-hidden relative isolate pt-24 sm:pt-0'>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={Foto2} alt='imagem loja' className='h-full w-full object-cover' />
                        {/* DEPOIS APAGAR: */}
                        <div className='-mt-44 sm:-mt-80 text-center mx-auto max-w-3xl py-22 sm:py-32'>
                            <h1 className='sm:-mt-80 text-lg font-bold tracking-tight text-white sm:text-5xl'>Com mais de quatro décadas de experiência, nossa loja de móveis oferece qualidade, variedade e estilo desde 1976</h1>
                            <div className='mt-4 sm:mt-10 flex items-center justify-center gap-x-6'>
                                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank" className='rounded-xl bg-[#eb3334] px-6 sm:px-10 py-3 text-xs sm:text-lg font-bold text-white shadow-sm hover:bg-[#db5454] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#db5454]'>ENTRAR EM CONTATO <span aria-hidden='true'>&rarr;</span></Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Foto3} alt='imagem loja' className='h-full w-full object-cover' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero