import { component$ } from '@builder.io/qwik';

interface ProductProps {
    product: {
        id: number;
        naslov: string;
        podNaslov: string;
        image: string;
        rev: number;
    }
}

export const Product = component$<ProductProps>(({ product }) => {
    return <div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-95" >
        <div onClick$={()=>console.log("otvori vise")}>
            <img class="w-full" width={200} height={100} src={product.image} alt="Sunset in the mountains" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p class="text-white text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>

            </div>
        </div>
        <div class="flex justify-between px-6 py-4">
            <button onClick$={() => console.log("kupi")} class="border border-[#0D525A]  hover:bg-[#0D525A] focus:outline-none focus:ring active:bg-[#0D525A] text-white font-bold py-2 px-4 rounded">
                Dodaj u korpu
            </button>
        </div>
    </div>
});