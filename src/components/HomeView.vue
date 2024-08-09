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

onMounted(async () => {
    if (isLoggedIn() && !move) {
        logout()
    }

    fetch('https://dummyjson.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 30, // optional, defaults to 60
        })
    })
        .then(res => res.json())
        .then(data => {
            const token = data.token
            console.log(data);
            console.log(token);
            /* providing token in bearer */
            fetch('https://dummyjson.com/user/me', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ${token}',
                },
            })
                .then(res => res.json())
                .then(console.log)
        });
});
</script>

<template>
    <div class="pt-20 font-['Plus Jakarta Sans'] text-[#121212]">
        <MainFooter />
    </div>
</template>