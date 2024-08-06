<script setup>
import { ref } from 'vue';
import { Auth } from '../../composables/authFunctions';
import { useRoute, useRouter } from 'vue-router';

const {
    Authentication,
    isLoggedIn,
    username,
    password,
    user
} = Auth();

const route = useRoute();
const router = useRouter();

if (isLoggedIn()) {
    console.log('User is already logged in');
    console.log(user);
} else {
    console.log('User is not logged in');
}

const productPage = () => {
  router.push({
    name: 'products',
    params: { page: 1 },
    query: { page: 1 }
  }).then(() => {
    window.location.reload();
  });
};
</script>

<template>
    <section class="w-full h-full flex">
        <div class="p-20 w-[50%] h-screen flex items-center">
            <section class="flex flex-col gap-4">
                <h1 class="text-lg text-[#84BAE8]">
                    LOGIN ACCOUNT
                </h1>
                <h2 class="text-3xl ">
                    Login to Your Account
                </h2>
                <p>
                    Please fill this form for login to Your account and starting to look at Your profile and
                    notifications.
                </p>
                <form action="" class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <label for="email">Email</label>
                        <input v-model="username" class="px-4 py-3 rounded-md border-2 border-slate-300" type="text"
                            name="email" placeholder="Enter your email">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="password">Password</label>
                        <input v-model="password" class="px-4 py-3 rounded-md border-2 border-slate-300" type="password"
                            name="password" placeholder="Enter your password">
                    </div>
                </form>
                <p>
                    Forgot Your Password? Click here
                </p>
                <div class="flex justify-between items-center">
                    <router-link :to="{}" @click="Authentication"
                        class="px-3 py-2 bg-[#111111] rounded-md border-2 border-[#111111] text-white text-lg hover:opacity-85">
                        Login with email
                    </router-link>
                    <span class="text-nowrap">
                        Or
                    </span>
                    <button
                        class="px-3 py-2 flex items-center gap-2 bg-[#F8F9FA] hover:bg-[#e4e5e6] rounded-md border-2 border-[#F8F9FA] hover:border-[#e4e5e6] text-lg hover:opacity-85">
                        <img src="/images/google-icon.png" alt="">
                        <span>
                            Login with Google
                        </span>
                    </button>
                </div>
                <p class="w-full text-center">
                    Don't Have Any Account?
                    <router-link :to="{ name: 'register' }" class="hover:font-[500]">
                        Regist Here
                    </router-link>
                </p>
            </section>
        </div>
        <div class="w-[50%] h-full">
            <img src="/images/auth-picture.jpg" alt="" class="w-fit h-screen object-cover">
        </div>
    </section>
</template>