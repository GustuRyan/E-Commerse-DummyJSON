<template>
    <div class="fixed w-screen h-screen z-[70] flex justify-center items-center top-0">
        <section
            class="flex flex-col justify-between items-center w-[560px] h-fit p-16 rounded-md bg-white z-[70]">
            <div class="w-full h-full flex flex-col justify-center items-center gap-8">
                <h3 class="text-center text-xl font-[500]">
                    You're not login yet
                </h3>
                <p class="text-center text-lg">
                    Please login first to add and see your cart items list. You can go to login page by this button
                    below
                </p>
                <router-link :to="{ name: 'login' }"
                    class="mx-20 flex justify-center text-white text-lg font-[500] py-2 px-2 rounded-md bg-[#84BAE8] hover:bg-[#6498c6]">
                    Login Right Now
                </router-link>
            </div>
        </section>
        <div @click="$emit('change-open');" class="w-full h-full fixed top-0 z-[60] bg-[#121212] opacity-25"></div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue';
import CartContainer from './products/cart-container.vue';
import { Auth } from '../../composables/authFunctions';

const {
    isLoggedIn,
} = Auth();

const props = defineProps({

});

const emit = defineEmits(['change-open', 'update-overall-prices']);
</script>