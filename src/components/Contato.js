import React from "react"
import { Link } from 'gatsby'
import { getWhatsUrl } from '../utils/index.js'
import { CTA_WHATSAPP_MENSAGENS, URLS } from '../utils/constants'
import Icon from '../images/icon-clock.webp'

const Contato = () => {
    return (
        <div className="flex flex-col items-center" id="contato">
            <h1 class="mt-10 sm:mt-20 text-center text-4xl font-bold tracking-tight text-[#f3d2d2] sm:text-7xl">ENTRE EM CONTATO</h1>
            <h1 class="-mt-2 text-center text-xl font-bold tracking-tight text-[#a72626] sm:text-2xl">ENTRE EM CONTATO CONOSCO!</h1>
            <div className='mt-10 flex flex-col md:flex-row mx-auto'>
                <ul className='space-y-6 mt-0 sm:mt-5 text-[#752424]'>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Telefone</span>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor'
                                    className='h-7 w-6'>
                                    <path
                                        stroke-linecap='round' stroke-linejoin='round' d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z' />
                                </svg>
                            </dt>
                            <dd className='text-xl' to='#' >+55 47 99215-7200</dd>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Whatsapp</span>
                                <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target="_blank">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-7 w-6'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            d='M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to={getWhatsUrl(CTA_WHATSAPP_MENSAGENS.ctaButton)} target='_blank'>
                                <dd className='text-xl' >+55 47 99215-7200</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Instagram</span>
                                <Link to={URLS.instagram} target="_blank">
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        className='h-7 w-6'
                                        fill='currentColor'
                                        viewBox='0 0 24 24'>
                                        <path
                                            d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to={URLS.instagram} target='_blank'>
                                <dd className='text-xl' >@sandiz_moveis</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8 max-w-xs'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Endereco</span>
                                <Link to={URLS.maps} target="_blank">
                                    <svg className='h-7 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                        <path stroke-linecap='round' stroke-linejoin='round' d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z' />
                                    </svg>
                                </Link>
                            </dt>
                            <Link to={URLS.maps} target="_blank">
                                <dd className='text-xl'>Rua Indaial, 440 - Quintino, Timbó - SC - 89120-000</dd>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className='flex gap-x-4 mx-8 sm:mx-6 max-w-xs'>
                            <dt className='flex-none'>
                                <span className='sr-only'>Horario</span>
                                <img src={Icon} className='h-7 w-7 sm:h-8 sm:w-8' alt='icone' />
                            </dt>
                            <dd className='text-xl'><b>Segunda a Sexta:</b> das 8h30 às 12h00 e das 13h40 às 18h00. <br/><b>Sábado:</b> das 8h30 às 12h00. <br/><b>Outros horários:</b> mediante a agendamento.</dd>
                        </div>
                    </li>
                </ul>

                <div className=''>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.450249775127!2d-49.268441!3d-26.8363719!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94defd53f8fa871d%3A0x454426221018f935!2sSandiz%20estofados!5e0!3m2!1spt-BR!2sbr!4v1714677556117!5m2!1spt-BR!2sbr"
                        width='500'
                        height='400'
                        className='mx-auto max-w-[22rem] lg:max-w-[53.25rem] mb-10 mt-5 sm:mt-0'
                        allowfullscreen=''
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'
                        title='Mapa da localização da Sandiz Moveis'>
                    </iframe>
                </div>
            </div>
        </div>

    )
}

export default Contato