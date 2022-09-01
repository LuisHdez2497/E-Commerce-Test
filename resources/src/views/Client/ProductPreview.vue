<template>
    <div id="product-description">
        <Header />
        <div class="min-w-screen min-h-screen bg-orange-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
            <div class="w-full max-w-7xl bg-white shadow-xl p-10 lg:p-14 xl:p-20 mx-auto text-gray-800 relative md:text-left rounded-xl">
                <router-link to="/" class="text-4xl bg-transparent opacity-75 hover:opacity-100 text-black font-semibold"><i class="mdi mdi-arrow-left-bold-circle -ml-1 mr-1"></i> Home</router-link>
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
                        <div>
                            <div class="inline-block align-bottom mr-5">
                                <span class="text-3xl font-bold leading-none align-baseline">$</span>
                                <span class="font-semibold text-5xl leading-none align-baseline">{{ product.price }}</span>
                            </div>
                            <div class="inline-block align-bottom">
                                <button class="border-black border-2 bg-white sm:mr-3 opacity-75 hover:opacity-100 text-black hover:bg-black hover:text-white rounded-full px-7 py-2 font-semibold"><i class="mdi mdi-cart -ml-1 mr-1"></i> ADD CART</button>
                                <button class="bg-orange-300 opacity-75 hover:opacity-100 hover:bg-orange-400 text-black hover:text-white rounded-full px-7 py-2 font-semibold"><i class="mdi mdi-shopping -ml-1 mr-1"></i> BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "../../components/Header.vue";
import {mapState, mapActions} from 'vuex';
import store from "../../store";

export default {
    name: 'Product Description',
    components: {
        Header
    },
    data(){
        return {
            img_src: ''
        }
    },
    props: {
        id: String
    },
    methods: {
        ...mapActions(['showProduct']),
    },
    computed: {
        ...mapState(['product', 'media'])
    },
    created() {
        store.commit('SET_PRODUCT', {id: this.id});
        this.showProduct();
    },
    updated(){
        this.img_src = '/storage/'+this.media.model_id+'/'+this.media.file_name;
    }
}
</script>
