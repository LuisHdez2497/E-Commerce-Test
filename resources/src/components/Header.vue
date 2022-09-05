<template>
    <div id="header" class="w-full bg-orange-100">
        <div class="px-6 py-5">
            <div class="container mx-auto">
                <div class="w-full">
                    <div class="flex items-end justify-evenly space-x-8 xl:space-x-8">

                        <router-link to="/" class="text-black text-center text-xl font-bold hover:text-orange-500">
                            <i class="block mdi mdi-home-outline text-5xl"></i>Home
                        </router-link>

                        <router-link to="/cart" class="text-black text-xl text-center font-bold hover:text-orange-500">
                            <i class="block mdi mdi-cart-outline text-5xl"></i>Cart
                        </router-link>

                        <router-link to="/login" class="text-black text-xl text-center font-bold hover:text-orange-500">
                            <i class="mdi mdi-login-variant block text-5xl"></i>Login
                        </router-link>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
};
</script>
