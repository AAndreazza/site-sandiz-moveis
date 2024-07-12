import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS } from '../utils/constants'
import Foto1 from '../images/fotoHome.webp'
import Foto2 from '../images/salaJantarHome.webp'
import Foto3 from '../images/poltronaHome.webp'
import Foto4 from '../images/salaJantarHome2.webp'

const Hero = () => {
    const sliderRef = useRef(null);
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInitialized(true);
            sliderRef.current.slickPlay();
        }, 4000); 

        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: initialized, 
        autoplaySpeed: 4000,
        customPaging: i => (
            <button className="mt-10">
                ●
            </button>
        )
    };

    return (
        <div className='overflow-hidden relative isolate pt-24 sm:pt-0'>
            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    <div className='bg-[#eb3334] relative'>
                        <img src={Foto1} alt='imagem de dentro da loja' className='opacity-60 h-full w-full object-cover' />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <div className='text-center mx-auto max-w-3xl pt-22 sm:pt-32'>
                                <h1 className='text-base mx-8 sm:mx-0 font-bold tracking-tight text-white sm:text-5xl'>Com mais de quatro décadas de experiência, nossa loja de móveis oferece qualidade, variedade e estilo desde 1976</h1>
                                <div className='mt-4 sm:mt-10 flex items-center justify-center gap-x-6'>
                                    <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank" className='rounded-xl bg-[#eb3334] px-6 sm:px-10 py-3 text-xs sm:text-lg font-bold text-white shadow-xl hover:bg-[#a72626]'>ENTRAR EM CONTATO <span aria-hidden='true'>&rarr;</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={Foto2} alt='sala de jantar' className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={Foto3} alt='poltrona' className='h-full w-full object-cover' />
                    </div>
                    <div>
                        <img src={Foto4} alt='sala de jantar' className='h-full w-full object-cover' />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Hero
