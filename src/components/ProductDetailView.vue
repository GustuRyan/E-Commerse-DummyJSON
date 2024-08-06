<script setup>
import ProductDetail from './sections/ProductDetail.vue';
import MainFooter from '../components/sections/Footer.vue';
import { defineProps, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.query.id;
const product = ref({});

onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products/' + id);
    const data = await response.json();
    product.value = data;
    console.log(product.value)
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});
</script>

<template>
  <div class="pt-20 font-['Plus Jakarta Sans'] text-[#121212]">
    <ProductDetail :product="product" />
    <MainFooter />
  </div>
</template>