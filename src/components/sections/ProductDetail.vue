<script setup>
import { defineProps, ref } from 'vue';
import warnbar from '../contents/warnbar.vue';
import { Auth } from '../../composables/authFunctions';

const props = defineProps ({
    product: {
        type: Object,
        required: true,
    },
})

const warnOpen = ref(false);

const {
    isLoggedIn,
} = Auth();

const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
        warnOpen.value = false
    }
};

window.addEventListener('keydown', handleEscapeKey);
</script>

<template>
    <section class="w-full h-full p-20 flex flex-col justify-center gap-8">
        <div class="flex justify-between items-center">
            <p class="text-lg">
                Products/{{ product.title }}
            </p>
            <div class="flex items-center gap-4">
                <span class="text-lg font-[500]">
                    ${{ product.price }}
                </span>
                <button v-if="isLoggedIn()" class="px-6 py-3 text-lg text-white bg-[#84BAE8] hover:bg-[#6498c6]">
                    Add to Cart
                </button>
                <button v-else @click="warnOpen = !warnOpen" class="px-6 py-3 text-lg text-white bg-[#84BAE8] hover:bg-[#6498c6]">
                    Add to Cart
                </button>
            </div>
        </div>
        <div class="flex gap-12">
            <div class="w-[50%] flex flex-col gap-6">
                <div class="w-full h-fit flex justify-center border-[#DDDDDD] border-[1px]">
                    <img :src="product.thumbnail"
                        alt="" class="w-fit h-[450px] object-cover">
                </div>
                <div class="w-full h-fit flex gap-4 overflow-x-scroll scrollbar-hide">
                    <img v-for="image in product.images" :src="image" alt="" class="w-full h-full max-w-52 object-cover border-[#DDDDDD] border-[1px]">
                    <img v-for="image in product.images" :src="image" alt="" class="w-full h-full max-w-52 object-cover border-[#DDDDDD] border-[1px]">
                    <img v-for="image in product.images" :src="image" alt="" class="w-full h-full max-w-52 object-cover border-[#DDDDDD] border-[1px]">
                </div>
            </div>
            <div class="w-[50%] flex flex-col gap-3">
                <h1 class="text-3xl w-[70%] font-[500]">
                    {{ product.title }}
                </h1>
                <div class="flex justify-between w-[80%]">
                    <h2 class="text-xl w-full">
                        Category: {{ product.category }}
                    </h2>
                    <h2 class="flex items-center gap-3 text-xl font-[500] w-full">
                        Rating: {{ product.rating }} 
                        <img src="/images/star_fill.svg" alt="" class="w-6 h-full">
                    </h2>
                </div>
                <div class="flex justify-between w-[80%] mb-4">
                    <h2 class="text-xl w-full font-[500]">
                        Status: {{ product.availabilityStatus }}
                    </h2>
                    <h2 class="flex items-center gap-3 text-xl w-full">
                        Stock: {{ product.stock }}
                    </h2>
                </div>
                <p class="text-lg">
                    {{ product.description }}
                </p>
            </div>
        </div>
    </section>
    <warnbar v-if="warnOpen" @change-open="warnOpen = !warnOpen" />
</template>
