<template>
    <div class="sidebar">
        <ul class="flex text-3xl">
            <li>
                <router-link to="/admin/products">Products</router-link>
            </li>
            <li>
                <router-link to="/admin/users">Users</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SideBar"
};
</script>
