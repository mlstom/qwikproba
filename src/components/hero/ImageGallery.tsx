/** @jsxImportSource react */

import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { qwikify$ } from '@builder.io/qwik-react';

const ReactImageGallery = () => {
    const products = [{
        id: 1,
        naslov: "Neki bolji dani 1",
        podNaslov: "Neki pod naslov 1",
        image: "https://images.unsplash.com/photo-1631390573050-4959fb722f1a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 2,
        naslov: "Neki bolji dani 2",
        podNaslov: "Neki pod naslov 2",
        image: "https://images.unsplash.com/photo-1631390573311-3bb5329df0d3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 3,
        naslov: "Neki bolji dani 3",
        podNaslov: "Neki pod naslov 3",
        image: "https://images.unsplash.com/photo-1631390573012-21806f8ff5bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ]
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {products.map((product, indx) => <SwiperSlide key={indx} className='relative w-[100vw]'>
                    <div className='absolute z-10 w-full  max-w-screen-xl  px-4 py-32 lg:flex lg:h-screen lg:items-center'>
                        <div className="container mx-auto md:ml-10 text-center max-w-[500px] min-w-[400px]">
                            <h1 className="text-5xl bg-gradient-to-r from-[#00A3C4] via-[#007F8E] to-[#0D525A] text-transparent bg-clip-text  font-medium mb-6">{product.naslov}</h1>
                            <p className="text-xl mb-12 text-white">{product.podNaslov}</p>
                            <div className="mt-8 mx-auto w-[90%] flex flex-wrap justify-center gap-4">
                                <a
                                    className="block w-full rounded border border-[#0D525A] bg-[#0D525A] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                                    href="#"
                                >
                                    Kupi odmah
                                </a>

                                <a
                                    className="block w-full rounded border border-[#0D525A] px-12 py-3 text-sm font-medium text-white hover:bg-[#0D525A] focus:outline-none focus:ring active:bg-[#0D525A] sm:w-auto"
                                    href="#"
                                >
                                    Vidi vise
                                </a>
                            </div>
                        </div>
                    </div>
                    <img className='h-[700px] object-cover brightness-50' src={product.image} width={1500} height={700} />

                </SwiperSlide>)}
            </Swiper>
        </>
    )
}

export const ImageGallery = qwikify$(ReactImageGallery)