<template>
    <div id="login" class="flex flex-col h-screen">
        <Header></Header>
        <div class="flex items-center h-1/2 justify-center px-4 sm:px-6 lg:px-8 my-auto">
            <div class="flex flex-col justify-center w-1/2 h-full shadow-2xl bg-white border-t-8 border-orange-400 rounded-lg p-5">
                <div>
                    <h2 class="text-center text-4xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <form class="space-y-10 px-5 m-5" action="#" method="POST">

                    <input type="hidden" name="remember" value="true"/>

                    <div class="-space-y-px rounded-md shadow-sm px-5">
                        <div>
                            <input id="email-address" name="email" type="email" autocomplete="email" required=""
                                   class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xl"
                                   placeholder="Email address"/>
                        </div>
                        <div>
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                   required=""
                                   class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-xl"
                                   placeholder="Password"/>
                        </div>
                    </div>

                    <div class="flex items-center justify-between px-5">
                        <div class="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox"
                                   class="h-8 w-8 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                            <label for="remember-me" class="ml-2 block text-xl text-gray-900">Remember me</label>
                        </div>
                    </div>

                    <div class="w-full flex justify-center">
                        <button type="submit"
                                class="group relative flex w-3/4 justify-center rounded-md border border-transparent bg-orange-500 py-2 px-4 text-xl font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <LockClosedIcon class="h-5 w-5 text-white" aria-hidden="true"/>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { LockClosedIcon } from '@heroicons/vue/20/solid';
import Header from "../../components/Header.vue";

export default {
    name: 'Login',
    components: {
        LockClosedIcon,
        Header
    }
}
</script>
