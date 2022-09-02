<template>
    <div id="header">
        <div class="absolute top-0 z-20 min-w-full bg-transparent">
            <div class="px-6 py-9">
                <div class="container mx-auto flex items-end justify-end">
                    <div class="justify-end flex items-center space-x-4">
                        <div class="flex items-end space-x-8 xl:space-x-8">
                            <router-link to="/cart"
                                    class="text-black text-xl text-center font-bold hover:text-orange-500">
                                <svg class="fill-stroke" width="45" height="45" viewBox="0 0 26 26" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M1 5.7998H25" stroke="currentColor" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                                        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                </svg> Cart
                            </router-link>
                            <router-link to="/login" class="text-black text-xl font-bold hover:text-orange-500"><i class="mdi mdi-login-variant block text-5xl text-center"></i>Login</router-link>
                        </div>
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
