<template>
    <div class="w-full h-full">
        <section class="fixed flex flex-col justify-between items-center w-[436px] h-screen bg-white z-[70] top-0 right-0">
            <div class="w-full h-20 flex border-b-[1px] sticky top-0 bg-white items-center px-10 py-6">
                <h1 class="text-2xl text-start">
                    Keranjang Saya (4)
                </h1>
            </div>
            <section class="w-full h-fit flex flex-col px-10 overflow-y-scroll scrollbar-hide pt-6 pb-4 gap-6">
                <CartContainer />
                <CartContainer />
                <CartContainer />
                <CartContainer />
                <CartContainer />
                <CartContainer />
                <CartContainer />
                <CartContainer />   
            </section>
            <div class="w-full h-fit flex justify-between py-4 px-10 bg-[#84BAE8] text-white text-lg">
                <p class="flex flex-col">
                    <span>
                        Total
                    </span>
                    <span class="font-[500]">
                        Rp. 177.000
                    </span>
                </p>
                <button class="hover:opacity-60">
                    Checkout Sekarang
                </button>
            </div>
        </section>
        <div @click="$emit('change-open');" class="w-full h-full fixed top-0 z-[60] bg-[#121212] opacity-25"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue';
import CartContainer from './products/cart-container.vue';

const props = defineProps({
    
});

const emit = defineEmits(['change-open', 'update-overall-prices']);
</script>