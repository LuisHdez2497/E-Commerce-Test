<template>
    <div id="products" class="flex min-h-screen">
        <SideBar></SideBar>
        <div class="flex w-full flex-col min-h-full p-8">
            <div class="flex justify-between m-5 text-5xl font-semibold">
                <h1>Edit Product</h1>
            </div>
            <div class="m-5">

            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../../components/SideBar.vue';

export default {
    name: "Edit Product",
    components: {
        SideBar
    }
};
</script>
