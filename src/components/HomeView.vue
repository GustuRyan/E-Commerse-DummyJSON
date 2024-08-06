<script setup>
import Login from './sections/Login.vue'
import MainFooter from '../components/sections/Footer.vue'
import { Auth } from '../composables/authFunctions';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const move = route.query.move;

const {
    Authentication,
    isLoggedIn,
    username,
    password,
    user,
    getCookie,
    logout
} = Auth();

onMounted (async () => {
    if (isLoggedIn() && !move) {
        logout()
    }
});
</script>

<template>
    <div class="pt-20 font-['Plus Jakarta Sans'] text-[#121212]">
        <MainFooter />
    </div>
</template>