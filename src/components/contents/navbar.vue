<script setup>
import CartBar from '../contents/cartbar.vue';
import { ref } from 'vue';
import { Auth } from '../../composables/authFunctions';
import { Cart } from '../../composables/cartFunction';
import { Product } from '../../composables/productsFunction';
import { vOnClickOutside } from '@vueuse/components';

const cartOpen = ref(false);
const profileOpen = ref(false);
const clicked2 = ref(false);

const {
    Authentication,
    isLoggedIn,
    logout,
    logUser,
    username,
    password,
    user
} = Auth();

const {
    addList,
    addCart,
    carts,
} = Cart();

const {
    jumpPage,
} = Product();

const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
        cartOpen.value = false
        profileOpen.value = false
    }
};

window.addEventListener('keydown', handleEscapeKey);

const popElement2 = () => {
    if (clicked2.value) {
        profileOpen.value = false;
    } else {
        profileOpen.value = true;
    }
};

const onClickAway2 = () => {
    if (profileOpen.value) {
        profileOpen.value = false;
        clicked2.value = true;
    } else {
        clicked2.value = false;
    }
};
</script>

<template>
    <nav class="w-screen h-20 px-[80px] py-[24px] fixed flex justify-between bg-white z-50 border-b-[1px]">
        <ul
            class="flex justify-between items-center mb-0 text-[16px] font-['Antique'] font-[400] text-[#888888] w-[360px]">
            <router-link :to="{ name: 'home', query: { move: true } }" class="hover:font-bold hover:text-[#676767]"
                active-class="font-bold text-[#84BAE8]">
                HOME
            </router-link>
            <router-link :to="{ name: 'about', query: { move: true } }" class="hover:font-bold hover:text-[#676767]"
                active-class="font-bold text-[#84BAE8]">
                ABOUT
            </router-link>
            <router-link @click="jumpPage(1)" :to="{ name: 'products', params: { page: 1 } }"
                class="hover:font-bold hover:text-[#676767]" active-class="font-bold text-[#84BAE8]">
                PRODUCTS
            </router-link>
            <router-link :to="{ name: 'articles', query: { move: true } }" class="hover:font-bold hover:text-[#676767]"
                active-class="font-bold text-[#84BAE8]">
                ARTICLES
            </router-link>
        </ul>
        <div class="flex items-center cursor-pointer">
            <img src="/images/Logo-Ipsum.png" alt="">
        </div>
        <div class="flex gap-8 justify-end items-center w-[360px]">
            <ul v-if="!isLoggedIn()"
                class="flex justify-center items-center mb-0 gap-8 text-[16px] font-['Antique'] font-[400] text-[#888888]">
                <router-link :to="{ name: 'login' }" class="hover:font-bold hover:text-[#676767]"
                    active-class="font-bold text-[#84BAE8]">
                    LOGIN
                </router-link>
                <router-link :to="{ name: 'register' }" class="hover:font-bold hover:text-[#676767]"
                    active-class="font-bold text-[#84BAE8]">
                    REGISTER
                </router-link>
            </ul>
            <div v-else class="relative w-fit h-fit">
                <div @click="popElement2"
                    class="w-fit h-full flex gap-2 items-center pl-3 hover:bg-neutral-100 py-1 pr-1 rounded-full cursor-pointer">
                    <span class="text-lg font-[500] capitalize">
                        {{ logUser.username }}
                    </span>
                    <img :src="logUser.image" alt="" class="rounded-full w-10 h-10 border-[1px]">
                </div>
                <div v-show="profileOpen" v-on-click-outside="onClickAway2"
                    class="absolute w-48 top-[58px] right-0 flex flex-col bg-white border-[1px] rounded-md p-4">
                    <router-link :to="{ name: 'home' }" class="font-[500] hover:bg-neutral-100 pb-3">
                        My Profile
                    </router-link>
                    <div class="w-full h-[1px] bg-neutral-200"></div>
                    <p @click="logout()" class="font-[500] cursor-pointer hover:bg-neutral-100 pt-3">
                        Logout
                    </p>
                </div>
            </div>
            <div @click="cartOpen = !cartOpen, addCart(logUser.id)"
                class="w-6 h-6 relative flex items-center justify-center hover:opacity-60 cursor-pointer">
                <img src="/images/shopping-bag.png" alt="shopping-bag-logo" class="h-5 w-fit">
                <div
                    class="w-5 h-5 absolute top-[-8px] right-[-8px] flex justify-center items-center rounded-full bg-[#84BAE8] border-[1px] border-white pb-[1px]">
                    <span class="text-center text-sm font-bold font-['Cabinet Grotesk Variable']">{{ carts.length
                        }}</span>
                </div>
            </div>
        </div>
    </nav>
    <CartBar v-if="cartOpen" @change-open="cartOpen = !cartOpen" />
</template>
