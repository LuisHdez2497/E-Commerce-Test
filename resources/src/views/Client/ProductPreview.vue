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
                        <div class="flex flex-col">
                            <div class="inline-block align-bottom mb-14">
                                <span class="text-3xl font-bold leading-none align-baseline">$</span>
                                <span class="font-semibold text-5xl leading-none align-baseline">{{ product.price }}</span>
                            </div>
                            <div v-if="!product.status">
                                <h3 class="text-3xl text-red-600">"Out of stock"</h3>
                            </div>
                            <div v-if="product.status" class="flex flex-col mb-6">
                                <label for="custom-input-number" class="text-gray-700 w-36 text-center text-lg font-semibold">Quantity</label>
                                <div class="flex flex-row h-10 rounded-lg relative bg-transparent mt-1">
                                    <button @click="quantity('decrement')" class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none">
                                        <span class="m-auto text-2xl font-bold">−</span>
                                    </button>
                                    <input type="number"
                                           class="w-16 outline-none focus:outline-none text-center bg-gray-300 font-semibold border-2 border-gray-400 text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                           name="custom-input-number" v-model="itemCart.quantity">
                                    <button @click="quantity('increment')" class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer">
                                        <span class="m-auto text-2xl font-bold">+</span>
                                    </button>
                                </div>
                            </div>
                            <div v-if="product.status" class="inline-block align-bottom">
                                <button @click="addItemToCart(itemCart)" class="border-black border-2 bg-white sm:mr-3 opacity-75 hover:opacity-100 text-black hover:bg-black hover:text-white rounded-full px-7 py-2 font-semibold"><i class="mdi mdi-cart -ml-1 mr-1"></i> ADD CART</button>
                                <router-link v-if="cartItems.length > 0" to="/cart"  class="bg-orange-300 opacity-75 hover:opacity-100 hover:bg-orange-400 text-black hover:text-white rounded-full px-7 py-2 font-semibold"><i class="mdi mdi-shopping -ml-1 mr-1"></i> BUY NOW</router-link>
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
            img_src: '',
            itemCart: {
                id: this.id,
                quantity: 1,
                status: ''
            }
        }
    },
    props: {
        id: String
    },
    methods: {
        ...mapActions(['showProduct', 'addItemToCart']),

        quantity(action) {
            if (action == 'decrement'){
                if (this.itemCart.quantity > 1){
                    this.itemCart.quantity--
                }else{
                    this.itemCart.quantity = 1;
                }

            }else{
                if (this.itemCart.quantity < 10){
                    this.itemCart.quantity++
                }else{
                    this.itemCart.quantity = 10;
                }
            }

        },
    },
    computed: {
        ...mapState(['product', 'media', "cartItems"]),
    },
    created() {
        store.commit('SET_PRODUCT', {id: this.id});
        this.showProduct();
    },
    updated(){
        this.img_src = (this.media != null) ? '/storage/'+this.media.model_id+'/'+this.media.file_name: '/storage/img/NotFound.png';
        this.itemCart.status = this.product.status
    }
}
</script>
