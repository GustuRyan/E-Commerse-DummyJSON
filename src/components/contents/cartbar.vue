<template>
    <div class="w-full h-full">
        <section class="fixed flex flex-col justify-between items-center w-[436px] h-screen bg-white z-[70] top-0 right-0">
            <div class="w-full h-20 flex border-b-[1px] sticky top-0 bg-white items-center px-10 py-6">
                <h1 class="text-2xl text-start">
                    My Cart ({{ carts.length }})
                </h1>
            </div>
            <section class="w-full h-full flex flex-col px-10 overflow-y-scroll scrollbar-hide pt-6 pb-4 gap-4">
                <div v-if="!isLoggedIn()" class="w-full h-full flex flex-col justify-center gap-4">
                    <h3 class="text-center text-xl font-[500]">
                        You're not login yet
                    </h3>
                    <p class="text-center text-lg">
                        Please login first to add and see your cart items list. You can go to login page by this button below
                    </p>
                    <router-link :to="{ name: 'login' }" class="mx-24 flex justify-center text-white text-lg font-[500] py-2 bg-[#84BAE8] hover:bg-[#6498c6]">
                        Login Right Now
                    </router-link>
                </div>
                <CartContainer v-else v-for="cart in carts" :product = "cart" :quant="cart.quantity" />
                <suggestCard v-if="list == 0" />
            </section>
            <div class="w-full h-fit flex justify-between py-4 px-10 bg-[#84BAE8] text-white text-lg">
                <p class="flex flex-col">
                    <span>
                        Total
                    </span>
                    <span class="font-[500]">
                        $ {{ total }}
                    </span>
                </p>
                <router-link v-if="isLoggedIn()" @click="$emit('change-open');" :to="{ name: 'my-cart' }" class="hover:opacity-60 text-nowrap flex items-center">
                    Checkout Now
                </router-link>
            </div>
        </section>
        <div @click="$emit('change-open');" class="w-full h-full fixed top-0 z-[60] bg-[#121212] opacity-25"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, toRefs, onMounted, onUnmounted, watch } from 'vue';
import CartContainer from './products/cart-container.vue';
import { Auth } from '../../composables/authFunctions';
import { Cart } from '../../composables/cartFunction';
import suggestCard from './suggest-card.vue';

const {
    isLoggedIn,
} = Auth();

const {
    carts,
    list,
    total,
} = Cart();

const props = defineProps({
    
});

const emit = defineEmits(['change-open', 'update-overall-prices']);
</script>