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
                                    <div class="relative mt-1 rounded-md shadow-sm">
                                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span class="text-gray-500 sm:text-sm">$</span>
                                        </div>
                                        <input @keyup="validate()" v-model="product.price" type="text" name="price" id="price" class="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="0.00" />
                                    </div>
                                </div>
                                <div class="col-span-6 sm:col-span-4">
                                    <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                                    <label for="status" class="inline-flex relative items-center mr-5 cursor-pointer">
                                        <input v-model="product.status" type="checkbox" value="" id="status" name="status" class="sr-only peer" checked>
                                        <div class="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 text-right sm:px-6">
                            <router-link to="/admin/products" class="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-xl font-medium text-white shadow-sm hover:bg-red-700 mr-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" >Back</router-link>
                            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-xl font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Alert :visible="alert.alertVisible" position="top-right" :color="alert.color" :title="alert.title" :description="alert.description" />
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
                status: true
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
            store.commit('SET_PRODUCT', this.product)
            this.insertProduct()
            this.product.name = "";
            this.product.description = "";
            this.product.price = "";
            this.product.status = true;
            setTimeout(() => {
                store.commit('SET_ALERT', {alertVisible: false})
            }, 5000);
        },

        validate() {
            let s = document.getElementById('price').value;
            if(isNaN(s)){
                s = s.replace(/[^0-9\.]/g,'');
                if(s.split('.').length>2)
                    s =s.replace(/\.+$/,"");
            }
            document.getElementById('price').value = s;
        }
    }
};
</script>
