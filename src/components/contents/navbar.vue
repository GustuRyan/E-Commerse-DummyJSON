<script setup>
import CartBar from '../contents/cartbar.vue';
import { ref } from 'vue';

const cartOpen = ref(true);

</script>

<template>
    <nav class="w-screen h-20 px-[80px] py-[24px] fixed flex justify-between bg-white z-50 border-b-[1px]">
        <ul class="flex justify-between items-center mb-0 text-[16px] font-['Antique'] font-[400] text-[#888888] w-[360px]">
            <router-link to="" class="hover:font-bold hover:text-[#676767]">
                HOME
            </router-link>
            <router-link to="" class="hover:font-bold hover:text-[#676767]">
                ABOUT
            </router-link>
            <router-link to="" class="hover:font-bold hover:text-[#676767]">
                PRODUCTS
            </router-link>
            <router-link to="" class="hover:font-bold hover:text-[#676767]">
                ARTICLES
            </router-link>
        </ul>
        <div class="flex items-center cursor-pointer">
            <img src="/images/Logo-Ipsum.png" alt="">
        </div>
        <div class="flex gap-8 justify-end items-center w-[360px]">
            <ul class="flex justify-center items-center mb-0 gap-8 text-[16px] font-['Antique'] font-[400] text-[#888888]">
                <router-link to="" class="hover:font-bold hover:text-[#676767]">
                    LOGIN
                </router-link>
                <router-link to="" class="hover:font-bold hover:text-[#676767]">
                    REGISTER
                </router-link>
            </ul>
            <div @click="cartOpen = !cartOpen" class="w-6 h-6 relative flex items-center justify-center hover:opacity-60 cursor-pointer"> 
                <img src="/images/shopping-bag.png" alt="shopping-bag-logo" class="h-5 w-fit">
                <div
                    class="w-5 h-5 absolute top-[-8px] right-[-8px] flex justify-center items-center rounded-full bg-[#84BAE8] border-[1px] border-white pb-[1px]">
                    <span class="text-center text-sm font-bold font-['Cabinet Grotesk Variable']">0</span>
                </div>
            </div>
        </div>
    </nav>
    <CartBar v-if="cartOpen" @change-open="cartOpen = !cartOpen"/>
</template>