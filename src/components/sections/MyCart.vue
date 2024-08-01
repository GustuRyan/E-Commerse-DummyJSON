<script setup>
import { defineProps, defineEmits, reactive, toRefs, onMounted, onUnmounted, watch } from 'vue';
import CartContainer from '../contents/products/cart-container.vue';

const props = defineProps({

});

const emit = defineEmits(['change-open', 'update-overall-prices']);
</script>

<template>
    <div class="w-full h-full flex px-20 py-10 gap-4">
        <div class="w-[70%] h-fit flex flex-col gap-6">
            <section class="flex flex-col gap-6">
                <h1 class="text-4xl font-[500]">
                    My Cart (4)
                </h1>
                <div class="flex flex-col gap-3">
                    <div class="flex justify-between font-[500] text-lg">
                        <h3>
                            Product
                        </h3>
                        <p class="flex gap-2">
                            <span class="w-[78px]">
                                Qty
                            </span>
                            <span class="w-[20px]">
                                #
                            </span>
                        </p>
                    </div>
                    <section class="w-full h-[448px] flex flex-col overflow-y-scroll scrollbar-hide pb-4 gap-4">
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                        <CartContainer />
                    </section>
                </div>
            </section>
            <section class="w-full flex flex-col gap-8">
                <h1 class="text-4xl font-[500]">
                    Recipients
                </h1>
                <div class="flex flex-col gap-8">
                    <h2 class="w-full flex items-center gap-4">
                        <span class="text-2xl text-nowrap">
                            01 - Recipient Information
                        </span>
                        <div class="h-[2px] w-full bg-slate-200"></div>
                    </h2>
                    <form action="" class="grid grid-cols-2 gap-8 text-lg">
                        <div class="flex flex-col gap-3">
                            <label for="first-name">First Name</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="first-name"
                                placeholder="eg:john">
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="last-name">Last Name</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="last-name"
                                placeholder="eg:doe">
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="email">Email</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="email"
                                placeholder="eg:johndoe@gmail.com">
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="email">Email</label>
                            <div class="flex ">
                                <div class="flex flex-col justify-center h-[55.2px] w-[30%] px-5 rounded-l-md border-2 border-slate-300"
                                    value="">
                                    <span class="text-[#28A745] text-sm">
                                        Country Code
                                    </span>
                                    <div class="flex items-center gap-2">
                                        <div class="w-7 h-5 bg-slate-200"></div>
                                        <span>+1</span>
                                    </div>
                                </div>
                                <input
                                    class="h-[55.2px] w-[70%] px-4 rounded-r-md border-y-2 border-r-2 border-slate-300"
                                    type="text" name="phone" placeholder="Phone Number">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="flex flex-col gap-6">
                    <h2 class="w-full flex items-center gap-4">
                        <span class="text-2xl text-nowrap">
                            02 - Recipient Address
                        </span>
                        <div class="h-[2px] w-full bg-slate-200"></div>
                    </h2>
                    <form action="" class="grid grid-cols-2 gap-8 text-lg">
                        <div class="flex flex-col gap-3">
                            <label for="first-name">Street Address</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="first-name"
                                placeholder="Enter your address">
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="last-name">Country</label>
                            <select name="" id="" class="px-4 py-3 rounded-md border-2 border-slate-300">
                                <option value="">Select a country</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="last-name">State / Province</label>
                            <select name="" id="" class="px-4 py-3 rounded-md border-2 border-slate-300">
                                <option value="">Select a province</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="last-name">City</label>
                            <select name="" id="" class="px-4 py-3 rounded-md border-2 border-slate-300">
                                <option value="">Select a city</option>
                            </select>
                        </div>
                        <div class="flex flex-col gap-3">
                            <label for="email">Zip / Postal Code</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="email"
                                placeholder="Enter your postal code">
                        </div>
                    </form>
                </div>
            </section>
        </div>
        <section class="w-[30%] bg-[#FCFCFC] px-4">
            <section class="px-4 pt-4 pb-8 flex flex-col gap-4">
                <h1 class="text-3xl font-[500]">
                    Order Summary
                </h1>
                <div class="h-[1px] w-full bg-slate-200"></div>
                <div class="flex flex-col">
                    <div class="flex flex-col gap-5">
                        <p class="w-full flex justify-between text-lg">
                            <span>
                                Items Subtotal
                            </span>
                            <span>
                                $100.00
                            </span>
                        </p>
                        <p class="w-full flex justify-between text-lg">
                            <span>
                                Promo
                            </span>
                            <span class="text-[#DC3545]">
                                -$0.00
                            </span>
                        </p>
                        <p class="w-full flex justify-between text-lg font-[500]">
                            <span>
                                Order Total
                            </span>
                            <span>
                                $100.00
                            </span>
                        </p>
                    </div>
                    <form action="" class="w-full flex flex-col text-lg gap-5">
                        <label for="email">Have a promo code?</label>
                        <div class="flex p-2 gap-2 border-2 border-slate-300">
                            <input class="w-[70%] px-2 py-3 border-2 border-white hover:border-slate-300" type="text" name="email"
                                placeholder="eg: xxxxxxxx">
                                <button class="w-[30%] bg-[#F8F9FA] hover:bg-[#e7e9ea]">Apply</button>
                        </div>
                    </form>
                </div>
                <div class="h-[1px] w-full bg-slate-200"></div>
                <button class="w-full p-4 bg-[#111111] flex flex-col justify-center items-center gap-4 hover:opacity-85">
                    <span class="text-xl text-white text-nowrap">
                        CONTINUE
                    </span>
                    <div class="w-full">
                        <img src="/images/continue-arrow.svg" alt="">
                    </div>
                </button>
            </section>
        </section>
    </div>
</template>