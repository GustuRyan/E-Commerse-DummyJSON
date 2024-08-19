<template>
    <router-link :to="{ name: 'product-detail', params: { id: product.id }, query: { id: product.id } }"
        class="px-2 w-full h-[423px] flex flex-col group">
        <img :src="product.thumbnail" alt=""
            class="h-[233px] w-full object-cover border-4 bg-white border-[rgb(252,252,252)] group-hover:border-[rgb(245,245,245)]">
        <div class="flex flex-col gap-4 bg-[rgb(252,252,252)] group-hover:bg-[rgb(245,245,245)] group-hover:shadow-md p-3">
            <h2 class="h-16 font-['Antique'] text-2xl">
                {{ product.title }}
            </h2>
            <p class="h-full text-[#7E7E7E] text-sm leading-5 truncate">
                {{ product.description }}
            </p>
            <div class="w-full h-full flex justify-between items-center">
                <p class="font-bold text-sm">
                    ${{ product.price }}
                </p>
                <router-link v-if="isLoggedIn()" @click="addList(product.id, 1)" :to="{ query: { page: page }}"
                    class="px-3 py-2 bg-[#84BAE8] hover:bg-[#6498c6] flex items-center gap-3 text-white z-20">
                    <span>
                        ADD TO CART
                    </span>
                    <img src="/images/cart-bag.svg" alt="cart-logo">
                </router-link>
                <router-link v-else to="" @click="$emit('change-open');"
                    class="px-3 py-2 bg-[#84BAE8] hover:bg-[#6498c6] flex items-center gap-3 text-white">
                    <span>
                        ADD TO CART
                    </span>
                    <img src="/images/cart-bag.svg" alt="cart-logo">
                </router-link>
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps, ref, defineEmits } from 'vue';
import { Auth } from '../../../composables/authFunctions';
import { Cart } from '../../../composables/cartFunction';
import { useRoute } from 'vue-router';

const {
    isLoggedIn,
    logUser
} = Auth();

const {
    addList,
    addCart
} = Cart();

const emit = defineEmits(['change-open']);
const route = useRoute();
const page = route.query.page;

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
})
</script>