import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute, useRouter } from 'vue-router';


export function Product() {
    const route = useRoute();
    const router = useRouter();
    const search = ref('');
    const filteredProducts = ref([])

    const nextPage = (link) => {
        router.push({
            name: 'products',
            params: { page: link + 1 },
            query: { page: link + 1 }
        }).then(() => {
            window.location.reload();
        });
    };
    
    const prevPage = (link) => {
        router.push({
            name: 'products',
            params: { page: link - 1 },
            query: { page: link - 1 }
        }).then(() => {
            window.location.reload();
        });
    };
    
    const jumpPage = (jump) => {
        router.push({
            name: 'products',
            params: { page: jump },
            query: { page: jump }
        }).then(() => {
            window.location.reload();
        });
    };

    const productsSearch = () => {
        router.push({
            name: 'products',
            query: { page: 1, search: search.value }
        }).then(() => {
            window.location.reload();
        }).catch(err => {
            console.error(err);
        });
    }
    
    const searchResult = async (searched) => {
        try {
            const response = await fetch('https://dummyjson.com/products/search?q=' + searched + '&limit=10&skip=0');
            const data = await response.json();
            const filteredProducts = data.products.filter(product => product.id < 50);
            return filteredProducts;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }
    
    const filterSearch = (filter) => {
        router.push({
            name: 'products',
            query: { page: 1, filter: filter }
        }).then(() => {
            window.location.reload();
        }).catch(err => {
            console.error(err);
        });
    }
    
    const categoryFilter = async (filter) => {
        try {
            const response = await fetch('https://dummyjson.com/products/category/' + filter);
            const data = await response.json();
            const filteredProducts = data.products.filter(product => product.id < 50);
            return filteredProducts;
        } catch (error) {
            console.error('Error:', error);
            return [];
        }
    }

    return {
        productsSearch,
        searchResult,
        filterSearch,
        categoryFilter,
        nextPage,
        prevPage,
        jumpPage,
        search,
        filteredProducts
    };
}