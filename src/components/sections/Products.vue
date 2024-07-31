<script setup>
import ProductCard from '../contents/products/main-card.vue'
</script>

<template>
    <section class="w-full h-full flex flex-col gap-6 px-20 py-10">
        <div class="flex justify-between">
            <div class="flex items-center gap-4">
                <h1 class="text-3xl">
                    All Products
                </h1>
                <p class="text-sm">
                    10 result from 10 products
                </p>
            </div>
            <select class="p-2 w-48 rounded-md border-[1px] shadow-md">
                <option value="">
                    Recommend
                </option>
            </select>
        </div>
        <section class="grid grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </section>
        <div class="flex justify-between items-center">
            <p class="text-sm">
                10 result from 10 products
            </p>
            <div class="flex w-fit h-12">
                <button class="w-10 h-full flex justify-center items-center border-2 rounded-l-md">
                    <img src="/images/go-back.svg" alt="" class="">
                </button>
                <button class="w-10 h-full flex justify-center items-center border-y-2 bg-[#84BAE8] border-[#84BAE8] text-white">
                    1
                </button>
                <button class="w-9 h-full flex justify-center items-center border-2">
                    2
                </button>
                <button class="w-9 h-full flex justify-center items-center border-y-2">
                    3
                </button>
                <button class="w-9 h-full flex justify-center items-center border-2 rounded-r-md">
                    <img src="/images/go-back.svg" alt="" class="rotate-180">
                </button>
            </div>
        </div>
    </section>
</template>