import { component$ } from '@builder.io/qwik';

export const Poruka = component$(() => {
  return <div class="mt-10 mb-10 w-[100vw] h-[50vh] bg-white relative">
    <div class="absolute left-10 md:block hidden"><img src={"https://images.ctfassets.net/jhcmej8zlqgw/60HIA3bT7o5lVkJ9lf8Hvn/48d0161174d06678ef204b511489f814/Long_thin_vine.png?fm=webp&q=80&w=150"} width={100} height={250} /></div>
    <div class="text-center w-[80%] mx-auto ">
      <h1 class="text-2xl font-bold">Dobro dosao na nas sajt</h1>
      <h6 class="mt-10">Neko nase putovanje do vrha koje ces ti ili ti da smislis mene to mrzi</h6>

      <p class="mt-10">Sebastian Pole & Tim Westwell, Co-founders and Herbal Revolutionaries</p>
    </div>
    <div class="absolute top-0 right-10 scale-x-[-1] md:block hidden"><img src={"https://images.ctfassets.net/jhcmej8zlqgw/60HIA3bT7o5lVkJ9lf8Hvn/48d0161174d06678ef204b511489f814/Long_thin_vine.png?fm=webp&q=80&w=150"} width={100} height={250} /></div>
  </div>
});