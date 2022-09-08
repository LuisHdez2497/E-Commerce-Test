<template>
    <div id="users" class="flex min-h-screen">
        <SideBar></SideBar>
        <div class="flex w-full flex-col min-h-full p-8">
            <div class="flex justify-between m-5 text-5xl font-semibold">
                <h1>Users</h1>
                <router-link to="add-user" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Add</router-link>
            </div>
            <div class="m-5">
                <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                User name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Action
                            </th>
                        </tr>
                        </thead>
                        <tbody class="text-lg">
                        <tr v-for="(user, index) in users" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {{ user.name }}
                            </th>
                            <td class="py-4 px-6">
                                {{ user.email }}
                            </td>
                            <td class="py-4 px-6">
                                <router-link :to="'edit-user/'+user.id" :id="user.id" class="font-medium text-blue-600 dark:text-blue-500 mr-4 hover:underline">Edit</router-link>
                                <button @click="this.delete(user.id, index)" class="font-medium text-red-600 hover:underline">Delete</button>
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
    name: "Users",
    components: {
        SideBar
    },
    data(){
        return {
            user:{
                id: ''
            }
        }
    },
    computed: {
        ...mapState(['users'])
    },
    methods: {
        ...mapActions(['getUsers', 'deleteUser']),

        delete(id, index){
            this.user.id = id;
            if (confirm('¿Do you want to delete this user?')){
                store.commit('SET_USER', this.user);
                this.deleteUser();
                this.users.splice(index, 1);
                setTimeout(() => {
                    store.commit('SET_ALERT', {alertVisible: false})
                }, 5000);
            }
        }
    },
    mounted() {
        this.getUsers();
    }
};
</script>
