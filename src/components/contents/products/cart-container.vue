<template>
    <div class="flex justify-between hover:bg-[rgb(245,245,245)] py-2 hover:px-2">
        <div class="flex gap-1">
            <img src="https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png" alt="" class="w-20 h-20 object-cover">
            <p class="flex flex-col">
                <span>
                    AWASH
                </span>
                <span class="font-[500]">
                    $30.00
                </span>
            </p>
        </div>
        <div class="h-fit grid grid-cols-4 item-center gap-y-8">
            <div class="flex col-span-2 sm:col-span-1 sm:place-content-end">
                <div class="w-9 h-9 rounded-lg border-[1px] flex justify-center items-center hover:bg-slate-300 cursor-pointer">
                    <img src="/images/plus-for-cart.svg" alt="" class="w-5 h-5">
                </div>
            </div>
            <p class="font-[500] flex items-center place-content-center">
                <span class="h-fit text-lg">
                    1
                </span>
            </p>
            <div class="w-9 h-9 rounded-lg border-[1px] flex justify-center items-center hover:bg-slate-300 cursor-pointer">
                <img src="/images/minus-for-cart.svg" alt="" class="w-5 h-5">
            </div>
            <div class="cursor-pointer hover:opacity-60 flex items-center place-content-end lg:col-span-1 col-span-4">
                <img src="/images/bin-logo.svg" alt="" class="w-6 h-6">
            </div>
        </div>
    </div>
</template>