import React, { useEffect } from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import sal from 'sal.js';
import 'sal.js/dist/sal.css';

const Index = () => {

    useEffect(() => {
        sal(); // Inicializando o Sal.js após a renderização do componente
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        //autoplay: true,
        //autosplaySpeed: 3000
    };
    
    return (
        <div>
            <div class="bg-gray-900">
                <header class="absolute inset-x-0 top-0 z-50">
                    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div class="flex lg:flex-1">
                            <a href="#" class="-m-1.5 p-1.5">
                                <span class="sr-only">Your Company</span>
                                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" />
                            </a>
                        </div>
                        <div class="flex lg:hidden">
                            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
                                <span class="sr-only">Open main menu</span>
                                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                        <div class="hidden lg:flex lg:gap-x-12">
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
                        </div>
                        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>

                    <div class="lg:hidden" role="dialog" aria-modal="true">
                        <div class="fixed inset-0 z-50"></div>
                        <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                            <div class="flex items-center justify-between">
                                <a href="#" class="-m-1.5 p-1.5">
                                    <span class="sr-only">Your Company</span>
                                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" />
                                </a>
                                <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
                                    <span class="sr-only">Close menu</span>
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div class="mt-6 flow-root">
                                <div class="-my-6 divide-y divide-gray-500/25">
                                    <div class="space-y-2 py-6">
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Product</a>
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Features</a>
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Marketplace</a>
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800">Company</a>
                                    </div>
                                    <div class="py-6">
                                        <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="slider-container">
                    <Slider {...settings}>
                        <div class="relative isolate overflow-hidden pt-14 py-32 sm:py-48 lg:py-56">
                            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                        </div>
                        <div class="relative isolate overflow-hidden pt-14 py-32 sm:py-48 lg:py-56">
                            <img src="https://images.unsplash.com/photo-1583521214690-73421a1829a9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
                        </div>
                    </Slider>
                </div>
            </div>

            <div class="bg-white py-24 sm:py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div data-sal="slide-left" data-sal-duration="2000" data-sal-delay="100" data-sal-easing="ease-out-back" class="mx-auto max-w-2xl lg:mx-0">
                        <p class="text-base font-semibold leading-7 text-indigo-600">Get the help you need</p>
                        <h2 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Support center</h2>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                    </div>
                </div>
            </div>

            <section class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
                <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
                <div class="mx-auto max-w-2xl lg:max-w-4xl">
                    <img class="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
                    <figure class="mt-10">
                        <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                            <p data-sal="zoom-in" data-sal-duration="1000" data-sal-delay="100" data-sal-easing="ease-out-back">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
                        </blockquote>
                        <figcaption class="mt-10">
                            <img class="mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                                <div class="font-semibold text-gray-900">Judith Black</div>
                                <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                    <circle cx="1" cy="1" r="1" />
                                </svg>
                                <div class="text-gray-600">CEO of Workcation</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>

            <div class="bg-white py-32">
                <div class="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                        <div class="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div class="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p class="text-xl leading-8 text-gray-600">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien.</p>
                                <p class="mt-10 max-w-xl text-base leading-7 text-gray-700">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                            </div>
                            <div class="lg:flex lg:flex-auto lg:justify-center">
                                <dl class="w-64 space-y-8 xl:w-80">
                                    <div class="flex flex-col-reverse gap-y-4">
                                        <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
                                        <dd class="text-5xl font-semibold tracking-tight text-gray-900">44 million</dd>
                                    </div>
                                    <div class="flex flex-col-reverse gap-y-4">
                                        <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
                                        <dd class="text-5xl font-semibold tracking-tight text-gray-900">$119 trillion</dd>
                                    </div>
                                    <div class="flex flex-col-reverse gap-y-4">
                                        <dt class="text-base leading-7 text-gray-600">New users annually</dt>
                                        <dd class="text-5xl font-semibold tracking-tight text-gray-900">46,000</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Index