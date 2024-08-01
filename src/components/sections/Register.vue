<template>
    <section class="w-full h-full flex">
        <div class="p-20 w-[50%]">
            <section class="flex flex-col gap-4">
                <h1 class="text-lg text-[#84BAE8]">
                    REGIST ACCOUNT
                </h1>
                <h2 class="text-3xl ">
                    Create New Account
                </h2>
                <p>
                    Please fill this form for create Your new account.
                </p>
                <form action="" class="flex flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <label for="fullname">Fullname</label>
                        <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="fullname"
                            placeholder="Enter your fullname">
                    </div>
                    <div class="flex flex-col gap-1">
                        <label for="email">Email</label>
                        <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="email"
                            placeholder="Enter your email">
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex flex-col gap-1">
                            <label for="password">Password</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="password"
                                placeholder="Enter your password">
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="password">Confirm Password</label>
                            <input class="px-4 py-3 rounded-md border-2 border-slate-300" type="text" name="password"
                                placeholder="Enter your password">
                        </div>
                    </div>
                </form>
                <div class="flex justify-between items-center">
                    <button class="px-3 py-2 bg-[#111111] rounded-md border-2 border-[#111111] text-white text-lg hover:opacity-85">
                        Login with email
                    </button>
                    <span class="text-nowrap">
                        Or
                    </span>
                    <button class="px-3 py-2 flex items-center gap-2 bg-[#F8F9FA] hover:bg-[#e4e5e6] rounded-md border-2 border-[#F8F9FA] hover:border-[#e4e5e6] text-lg hover:opacity-85">
                        <img src="/images/google-icon.png" alt="">
                        <span>
                            Login with Google
                        </span>
                    </button>
                </div>
                <p class="w-full text-center">
                    Already Have an Account? 
                    <router-link :to="{ name: 'login' }" class="hover:font-[500]">
                        Login Here
                    </router-link>
                </p>
            </section>
        </div>
        <div class="w-[50%] h-full">
            <img src="/images/auth-picture.jpg" alt="" class="w-fit h-[668.8px] object-cover">
        </div>
    </section>
</template>