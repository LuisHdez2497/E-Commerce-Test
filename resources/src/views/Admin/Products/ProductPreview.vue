<template>
    <div id="product-description" class="min-h-screen bg-white">
        <div class="min-w-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div class="w-full max-w-7xl bg-white shadow-xl p-10 lg:p-14 xl:p-20 mx-auto text-gray-800 relative md:text-left rounded-xl shadow-2xl bg-white border-t-8 border-orange-400">
                <router-link to="/admin/products" class="text-4xl bg-transparent opacity-75 hover:opacity-100 text-black font-semibold"><i class="mdi mdi-arrow-left-bold-circle -ml-1 mr-1"></i> Back</router-link>
                <div class="md:flex items-center -mx-10">
                    <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                        <div class="relative">
                            <img :src="img_src" class="w-full relative z-10" alt="">
                        </div>
                    </div>
                    <div class="w-full md:w-1/2 px-10">
                        <div class="mb-10">
                            <h1 class="font-bold uppercase text-5xl mb-5">{{ product.name }}</h1>
                            <p class="text-lg">{{ product.description }}</p>
                        </div>
                        <div class="flex flex-col">
                            <div class="inline-block align-bottom mb-14">
                                <span class="text-3xl font-bold leading-none align-baseline">$</span>
                                <span class="font-semibold text-5xl leading-none align-baseline">{{ product.price }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import store from "../../../store";

export default {
    name: "Product Preview",
    data(){
        return {
            img_src: '',
        }
    },
    props: {
        id: String
    },
    methods: {
        ...mapActions(['showProduct']),
    },
    computed: {
        ...mapState(['product', 'media']),
    },
    created() {
        store.commit('SET_PRODUCT', {id: this.id});
        this.showProduct();
    },
    updated(){
        this.img_src = (this.media != null) ? '/storage/'+this.media.model_id+'/'+this.media.file_name: '/storage/img/NotFound.png';
    }
};
</script>
