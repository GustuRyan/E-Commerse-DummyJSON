<template>
    <div class="flex justify-between hover:bg-[rgb(245,245,245)] py-2 hover:px-2">
        <div class="flex gap-2">
            <img :src="product.thumbnail" alt="" class="w-20 h-20 object-cover border-[1px] rounded-md">
            <p class="flex flex-col truncate">
                <span class="truncate max-w-[114px]">
                    {{ product.title }}
                </span>
                <span class="font-[500]">
                    ${{ product.price }}
                </span>
            </p>
        </div>
        <div class="h-fit grid grid-cols-4 item-center gap-y-8">
            <div class="flex col-span-2 sm:col-span-1 sm:place-content-end">
                <div @click="increment(), updateCart(product.id, quantity)" class="w-9 h-9 rounded-lg border-[1px] flex justify-center items-center hover:bg-slate-300 cursor-pointer">
                    <img src="/images/plus-for-cart.svg" alt="" class="w-5 h-5">
                </div>
            </div>
            <p class="font-[500] flex items-center place-content-center">
                <span class="h-fit text-lg">
                    {{ quantity }}
                </span>
            </p>
            <div @click="decrement(), updateCart(product.id, quantity)" class="w-9 h-9 rounded-lg border-[1px] flex justify-center items-center hover:bg-slate-300 cursor-pointer">
                <img src="/images/minus-for-cart.svg" alt="" class="w-5 h-5">
            </div>
            <div @click="deleteCart(product.id)" class="cursor-pointer hover:opacity-60 flex items-center place-content-end lg:col-span-1 col-span-4">
                <img src="/images/bin-logo.svg" alt="" class="w-6 h-6">
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { Cart } from '../../../composables/cartFunction';

const props = defineProps ({
    product : {
        type: Object,
        required: true
    },
    quant : {
        type: Number,
        required: true
    }
})

const {
    deleteCart,
    updateCart,
} = Cart();

const { product, quant } = toRefs(props);

const quantity = defineModel({ default: 0 });
quantity.value = quant.value;

function increment() {
  quantity.value++;
}

function decrement() {
    if (quantity.value > 0) {
        quantity.value--;
    }
}
</script>