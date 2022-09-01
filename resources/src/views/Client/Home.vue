<template>
    <div id="home">
        <Header />
        <div class="header h-60 flex justify-center items-center">
            <h1 class="text-5xl sm:text-7xl font-bold">ALL PRODUCTS</h1>
        </div>
        <div class="bg-white">
            <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-6">
                    <router-link v-for="product in products" :id="product.id" v-bind:to="'product-preview/'+product.id+'/'+product.slug" class="group p-1 mb-24">
                        <div class="h-full w-full overflow-hidden flex items-center justify-center rounded-lg bg-gray-200">
                            <img :src="'storage/'+product.media['0'].model_id+'/'+product.media['0'].file_name" :alt="product.media['0'].name" class="h-3/4 w-3/4 object-cover group-hover:opacity-75" />
                        </div>
                        <h3 class="mt-4 text-3xl text-gray-700">{{ product.name }}</h3>
                        <p class="mt-1 text-2xl font-medium text-gray-900">${{ product.price }}</p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import {mapState, mapActions} from 'vuex';

export default {
    name: "Home",
    components: {
        Header
    },
    methods: {
        ...mapActions(['getProducts']),
    },
    computed: {
        ...mapState(['products', 'product'])
    },
    mounted() {
        this.getProducts();
    }
};
</script>
