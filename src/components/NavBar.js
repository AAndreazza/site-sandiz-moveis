import React, { useState } from 'react'
import Logo from '../images/logo.webp'
import { Link as ScrollLink } from "react-scroll";

const NavBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <header className='absolute inset-x-0 top-0 z-50 bg-[#eb3334]' id='inicio'>
            <nav className='flex items-center justify-between p-6 lg:px-8' aria-label='Global'>
                <div class='flex lg:flex-1'>
                    <a href='/' class='-m-1.5 p-1.5 flex items-center'>
                        <span class='sr-only'>Sandiz Móveis</span>
                        <img class='h-7 sm:h-8 w-auto' src={Logo} alt='Logo Sandiz Moveis' />
                        <div class='ml-3 sm:ml-5 h-12 sm:h-8 w-1 bg-[#fff8ff]'></div>
                        <p class='ml-3 sm:ml-5 text-xs sm:text-sm font-semibold leading-6 text-[#fff8ff]'>MÓVEIS DIRETO DE FÁBRICA <br /> Timbó - SC</p>
                    </a>
                </div>

                {/* Barra lateral - abrir */}
                <div className='flex lg:hidden'>
                    <button type='button'
                        className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#fff8ff]'
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <span className='sr-only'>Abrir menu principal</span>
                        <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                            <path stroke-linecap='round' stroke-linejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                        </svg>
                    </button>
                </div>
                <div className='text-base hidden lg:flex lg:gap-x-6'>
                    {/*<a href='aparadores' className='font-semibold leading-6 text-white'>APARADORES</a>*/}
                    <a href='banquetas' className='font-semibold leading-6 text-white'>BANQUETAS</a>
                    {/*<a href='cadeiras' className='font-semibold leading-6 text-white'>CADEIRAS</a>*/}
                    <a href='colchoes' className='font-semibold leading-6 text-white'>COLCHÕES</a>
                    <a href='estofados' className='font-semibold leading-6 text-white'>ESTOFADOS</a>
                    <a href='poltronas' className='font-semibold leading-6 text-white'>POLTRONAS</a>
                    <a href='salajantar' className='font-semibold leading-6 text-white'>SALA DE JANTAR</a>
                    <ScrollLink to='contato' spy={true} smooth={true} className='cursor-pointer text-base font-semibold leading-6 text-white'>CONTATO</ScrollLink>
                </div>
                {/* 
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <a href='#' className='text-sm font-semibold leading-6 text-white'>WhatsApp <span aria-hidden='true'>&rarr;</span></a>
                </div>
                */}
            </nav>

            {/* Barra lateral - opções e fechar */}
            <div className={`lg:hidden ${isSidebarOpen ? '' : 'hidden'}`} role='dialog' aria-modal='true'>
                <div className='fixed inset-0 z-50'></div>
                <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#eb3334] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10'>
                    <div className='flex items-center justify-between'>
                        <a href='/' className='-m-1.5 p-1.5'>
                            <span className='sr-only'>Sandiz Móveis</span>
                            <img className='m-2 h-8 w-auto' src={Logo} alt='Logo Sandiz Moveis' />
                        </a>
                        <button type='button'
                            className='-m-2.5 rounded-md p-2.5 text-[#fff8ff]'
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <span className='sr-only'>Fechar menu</span>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' aria-hidden='true'>
                                <path stroke-linecap='round' stroke-linejoin='round' d='M6 18L18 6M6 6l12 12' />
                            </svg>
                        </button>
                    </div>
                    <div className='mt-6 flow-root'>
                        <div className='-my-6 divide-y divide-gray-500/25'>
                            <div className='space-y-8 py-10 ml-4'>
                            <a href='aparadores' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>APARADORES</button></a>
                                {/*<a href='banquetas' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>BANQUETAS</button></a>*/}
                                <a href='colchoes' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>COLCHÕES</button></a>
                                <a href='estofados' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>ESTOFADOS</button></a>
                                <a href='poltronas' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>POLTRONAS</button></a>
                                <a href='salajantar' className='block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>SALA DE JANTAR</button></a>
                                <ScrollLink to='contato' spy={true} smooth={true} className='cursor-pointer block text-lg font-semibold leading-6 text-white'><button onClick={() => setIsSidebarOpen(false)}>CONTATO</button></ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar