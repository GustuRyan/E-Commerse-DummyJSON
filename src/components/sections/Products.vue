<script setup>
import ProductCard from '../contents/products/main-card.vue'
import { ref, onMounted, toRefs, onUnmounted, defineProps } from 'vue';``
import { useRoute, useRouter } from 'vue-router';
import warnbar from '../contents/warnbar.vue';
import { Product } from '../../composables/productsFunction';
import { Cart } from '../../composables/cartFunction';

const props = defineProps({
    products: {
        type: Array,
        required: true,
    },
    page: {
        type: String,
        required: true
    },
    filter: {
        type: String
    },
    searched: {
        type: String
    },
})

const {
    search,
    productsSearch,
    filterSearch,
    nextPage,
    prevPage,
    jumpPage,
} = Product();

const {
    addList,
    addCart
} = Cart();

const warnOpen = ref(false);
const dropOpen = ref(false);
const clicked = ref(false);
const { page } = toRefs(props);
const link = ref(0)
const array = ref(5);

link.value = Number(page.value);

const from = ref((link.value - 1) * 10 + 1);
const until = ref(link.value * 10);
const uniqueCategories = ref({});

const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
        productsSearch();
    }
};

const escapeWarnKey = (event) => {
    if (event.key === 'Escape') {
        warnOpen.value = false;
        dropOpen.value = false;
    }
};

const popElement = () => {
    if (clicked.value) {
        dropOpen.value = false;
    } else {
        dropOpen.value = true;
    }
};

const onClickAway = () => {
    if (dropOpen.value) {
        dropOpen.value = false;
        clicked.value = true;
    } else {
        clicked.value = false;
    }
};

window.addEventListener('keydown', handleEnterKey);
window.addEventListener('keydown', escapeWarnKey);

fetch('https://dummyjson.com/products?limit=50&select=category')
    .then(res => res.json())
    .then(data => {
        // Extract categories from the data
        const categories = data.products.map(product => product.category);
        // Create a Set to ensure uniqueness
        uniqueCategories.value = [...new Set(categories)];
    })
    .catch(error => {
        console.error('Error:', error);
    });

onUnmounted(async () => {
    addCart(1);
});
</script>

<template>
    <section class="w-full h-full flex flex-col gap-6 px-20 py-10">
        <div class="grid grid-cols-3 justify-between">
            <div class="flex items-center gap-4">
                <h1 class="text-3xl">
                    All Products
                </h1>
                <p class="text-sm">
                    10 result from 50 products
                </p>
            </div>
            <div class="w-full flex">
                <input v-model="search" type="text" class="border-2 border-r-0 rounded-l-lg h-full w-full px-4"
                    placeholder="Search products by name here...">
                <router-link @click="productsSearch" :to="{}"
                    class="w-fit h-full flex items-center rounded-r-lg px-3 bg-[#84BAE8] hover:bg-[#6498c6]">
                    <img src="/images/search_line.svg" alt="" class="w-6 h-6">
                </router-link>
            </div>
            <div class="relative w-full flex flex-col justify-end items-end">
                <div @click="popElement" class="p-2 w-48 flex justify-between items-center rounded-md border-[1px] shadow-md cursor-pointer font-[500] hover:bg-neutral-100 capitalize">
                    <span v-if="filter == null">
                        all products
                    </span>
                    <span v-else>
                        {{ filter }}    
                    </span>
                    <img src="/images/down_fill.svg" alt="" :class="dropOpen ? 'rotate-180' : ''">
                </div>
                <div v-show="dropOpen" v-click-away="onClickAway" class="absolute top-16 right-0 flex flex-col px-4 py-2 w-80 rounded-md border-[1px] shadow-md cursor-pointer bg-white capitalize">
                    <router-link @click="jumpPage(1)" :to="{}" class="font-[500] p-2 hover:bg-neutral-100 rounded-sm">
                        all products
                    </router-link>
                    <router-link v-for="category in uniqueCategories" @click="filterSearch(category)" :to="{}" class="font-[500] p-2 hover:bg-neutral-100 border-t-[1px] rounded-sm">
                        {{ category }}
                    </router-link>
                </div>
            </div>
        </div>
        <section class="grid grid-cols-4 gap-8">
            <ProductCard v-for="product in products" :product="product" @change-open="warnOpen = !warnOpen" />
        </section>
        <div v-if="filter == null && searched == null" class="flex justify-between items-center">
            <p class="text-sm">
                showing {{ from }} to {{ until }} of 50 products
            </p>
            <div class="flex w-fit h-12">
                <router-link v-if="link > 1" :to="{}"
                    class="w-10 h-full flex justify-center items-center border-r-[1px] border-2 rounded-l-md hover:bg-slate-200 hover:border-slate-200"
                    @click="prevPage(link)">
                    <img src="/images/go-back.svg" alt="" class="">
                </router-link>
                <div v-else :to="{}"
                    class="w-10 h-full flex justify-center items-center border-r-[1px] border-2 rounded-l-md opacity-50">
                    <img src="/images/go-back.svg" alt="" class="">
                </div>
                <router-link v-for="index in array" @click="jumpPage(index)" :to="{}"
                    class="w-10 h-full flex justify-center items-center border-y-2"
                    :class="link == index ? 'bg-[#84BAE8] border-[#84BAE8] text-white hover:bg-slate-200 hover:border-slate-200' : 'border-[1px] hover:bg-slate-200 hover:border-slate-200'">
                    {{ index }}
                </router-link>
                <router-link v-if="link < 5" :to="{}"
                    class="w-9 h-full flex justify-center items-center border-l-[1px] border-2 rounded-r-md hover:bg-slate-200 hover:border-slate-200"
                    @click="nextPage(link)">
                    <img src="/images/go-back.svg" alt="" class="rotate-180">
                </router-link>
                <div v-else :to="{}"
                    class="w-9 h-full flex justify-center items-center border-l-[1px] border-2 rounded-r-md opacity-50">
                    <img src="/images/go-back.svg" alt="" class="rotate-180">
                </div>
            </div>
        </div>
    </section>
    <warnbar v-if="warnOpen" @change-open="warnOpen = !warnOpen" />
</template>