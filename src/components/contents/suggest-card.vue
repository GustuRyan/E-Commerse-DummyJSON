<template>
    <div class="w-full h-full flex items-center justify-center">
        <section
            class="flex flex-col justify-between items-center w-fit h-fit rounded-md bg-white">
            <div class="w-full h-full flex flex-col justify-center items-center gap-8">
                <h3 class="text-center text-xl font-[500]">
                    Your cart is empty
                </h3>
                <p class="text-center text-lg max-w-[560px]">
                    Please add some items too your cart, then you can checkout and get what have you been looking for.
                </p>
                <router-link @click="jumpPage(1)" :to="{ name: 'products', params: { page: 1 } }"
                    class="mx-20 flex justify-center text-white text-lg font-[500] py-2 px-2 rounded-md bg-[#84BAE8] hover:bg-[#6498c6]">
                    Add Items Now
                </router-link>
            </div>
        </section>
    </div>
</template>

<script setup>
import { Product } from '../../composables/productsFunction';

const {
    jumpPage,
} = Product();
</script>