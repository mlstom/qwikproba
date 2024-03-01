import { component$ } from '@builder.io/qwik';
import { Product } from './product';

export const Background = component$(() => {
    const najProdizvodi = [{
        id: 1,
        naslov: "Neki bolji dani 1",
        podNaslov: "Neki pod naslov 1",
        image: "https://images.unsplash.com/photo-1631390573050-4959fb722f1a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rev:4,
    },
    {
        id: 2,
        naslov: "Neki bolji dani 2",
        podNaslov: "Neki pod naslov 2",
        image: "https://images.unsplash.com/photo-1631390573311-3bb5329df0d3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rev:3,
    },
    {
        id: 3,
        naslov: "Neki bolji dani 3",
        podNaslov: "Neki pod naslov 3",
        image: "https://images.unsplash.com/photo-1631390573012-21806f8ff5bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rev:4,
    },
    {
        id: 4,
        naslov: "Neki bolji dani 2",
        podNaslov: "Neki pod naslov 2",
        image: "https://images.unsplash.com/photo-1631390573311-3bb5329df0d3?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rev:3,
    },
    {
        id: 5,
        naslov: "Neki bolji dani 3",
        podNaslov: "Neki pod naslov 3",
        image: "https://images.unsplash.com/photo-1631390573012-21806f8ff5bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        rev:4,
    }
    ]
    return <div class="relative w-screen ">
        <div class="absolute w-full bg-gradient-to-br from-[#52D681] to-[#0D525A] flex justify-center items-center py-20 ">
            <div class="flex-col justify-center items-center ">
                <h1 class="mt-6 text-center text-5xl text-white font-medium mb-6">Izdvajamo iz ponude</h1>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4">
                    {najProdizvodi.map((proizvod,indx)=><Product key={indx} product={proizvod} />)}
                </div>
            </div>

            <div class="custom-shape-divider-top-1709296053 ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
            <div class="custom-shape-divider-bottom-1709296511">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>


    </div>
});