<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Products from '../components/sections/Products.vue'
import MainFooter from '../components/sections/Footer.vue'
import { Product } from '../composables/productsFunction';

const products = ref([]);
const route = useRoute();
const router = useRouter();
const page = route.query.page;
const searched = route.query.search;
const filtered = route.query.filter;
const skip = ref(0);

const {
    searchResult,
    categoryFilter,
    filteredProducts,
} = Product();

if (page < 1 || page > 5) {
    router.push({
        name: 'products',
        params: { page: 1 },
        query: { page: 1 }
    }).then(() => {
        window.location.reload();
    });
}

skip.value = (page - 1) * 10;

onMounted(async () => {
    try {
        if (searched == null) {
            const response = await fetch('https://dummyjson.com/products?limit=10&skip=' + skip.value);
            const data = await response.json();
            products.value = data.products;
        } else {
            products.value = await searchResult(searched);
        }
        if (filtered != null) {
            console.log('filtered')
            products.value = await categoryFilter(filtered);
        }
    } catch (error) {
        console.error("Error fetching products:", error);
    }
});
</script>

<template>
    <div class="pt-20 font-['Plus Jakarta Sans'] text-[#121212]">
        <Products :products="products" :page="page" :filter="filtered" :searched="searched"/>
        <MainFooter />
    </div>
</template>