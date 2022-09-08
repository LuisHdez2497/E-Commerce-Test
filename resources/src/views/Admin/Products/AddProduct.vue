<template>
    <div id="products" class="flex min-h-screen">
        <SideBar></SideBar>
        <div class="flex w-full flex-col min-h-full p-8">
            <div class="flex justify-between m-5 text-5xl font-semibold">
                <h1>Add Product</h1>
            </div>
            <div class="m-5">
                <form @submit="sendForm">
                    <div class="overflow-hidden shadow-2xl border-2 sm:rounded-md">
                        <div class="bg-white px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                                <div class="col-span-6 sm:col-span-4">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" v-model="product.name" name="name" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                                    <input type="text" v-model="product.description" name="description" id="description" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-4">
                                    <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                                    <input type="text" v-model="product.price" name="price" id="price" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                                <div class="col-span-6 sm:col-span-4">
                                    <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                                    <input type="text" v-model="product.status" name="status" id="status" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../../components/SideBar.vue';
import { mapState, mapActions } from 'vuex';
import store from '../../../store';
import Alert from "../../../components/Alert.vue";

export default {
    name: "Add Product",
    components: {
        SideBar,
        Alert
    },
    data(){
        return {
            product: {
                name: "",
                description: "",
                price: "",
                status: ""
            },
        }
    },
    computed: {
        ...mapState(['alert'])
    },
    methods: {
        ...mapActions(['insertProduct']),

        sendForm(e) {
            e.preventDefault();
            store.commit('SET_PRODUCT', this.user)
            this.insertProduct()
            this.product.name = "";
            this.product.description = "";
            this.product.price = "";
            this.product.status = "";
        }
    }
};
</script>
