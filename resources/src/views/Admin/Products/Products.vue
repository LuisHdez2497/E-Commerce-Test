<template>
    <div id="products" class="flex min-h-screen">
        <SideBar></SideBar>
        <div class="flex w-full flex-col min-h-full p-8">
            <div class="flex justify-between m-5 text-5xl font-semibold">
                <h1>Products</h1>
                <router-link to="add-product" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Add</router-link>
            </div>
            <div class="m-5">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Product name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Price
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Status
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody class="text-lg">
                        <tr v-for="(product, index) in products" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ product.name }}
                            </th>
                            <td class="py-4 px-6">
                                $ {{ product.price }}
                            </td>
                            <td class="py-4 px-6">
                                {{ product.status == 1 ? "Available" : "Out of stock" }}
                            </td>
                            <td class="py-4 px-6">
                                <router-link :to="'product-preview/'+product.id" :id="product.id" class="font-medium text-green-600 mr-4 dark:text-blue-500 hover:underline">Show</router-link>
                                <router-link :to="'edit-product/'+product.id" :id="product.id" class="font-medium text-blue-600 dark:text-blue-500 mr-4 hover:underline">Edit</router-link>
                                <button @click="this.delete(product.id, index)" class="font-medium text-red-600 hover:underline">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../../components/SideBar.vue';
import { mapState, mapActions } from 'vuex';
import store from "../../../store";

export default {
    name: "Products",
    components: {
        SideBar
    },
    data(){
        return {
            product:{
                id: ''
            }
        }
    },
    computed: {
        ...mapState(['products'])
    },
    methods: {
        ...mapActions(['getProducts', 'deleteProduct']),

        delete(id, index){
            this.product.id = id;
            if (confirm('¿Do you want to delete this product?')){
                store.commit('SET_PRODUCT', this.product);
                this.deleteProduct();
                this.products.splice(index, 1);
                setTimeout(() => {
                    store.commit('SET_ALERT', {alertVisible: false})
                }, 5000);
            }
        }
    },
    mounted() {
        this.getProducts()
    }
};
</script>
