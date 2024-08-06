<script setup>
import MyCart from '../components/sections/MyCart.vue'
import MainFooter from '../components/sections/Footer.vue'

fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 1,
    products: [
      {
        id: 144,
        quantity: 4,
      },
      {
        id: 98,
        quantity: 1,
      },
    ]
  })
})
.then(res => res.json())
.then(console.log);

fetch('https://dummyjson.com/carts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    userId: 3,
    products: [
      {
        id: 11,
        quantity: 4,
      },
      {
        id: 5,
        quantity: 1,
      },
    ]
  })
})
.then(res => res.json())
.then(console.log);

</script>

<template>
    <div class="pt-20 font-['Plus Jakarta Sans'] text-[#121212]">
        <MyCart />
        <MainFooter />
    </div>
</template>