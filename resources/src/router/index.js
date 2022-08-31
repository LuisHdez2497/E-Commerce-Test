import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Client/Home.vue';

import Products from '../views/Admin/Products/Products.vue';
import AddProduct from '../views/Admin/Products/AddProduct.vue';
import EditProduct from '../views/Admin/Products/EditProduct.vue';

const routes = [
    //Client Routes
    {path: '/', name: "Home", component: Home},
    //End Client Routes

    //Admin Routes
    {path: '/admin/products', name: "Products", component: Products},
    {path: '/admin/add-product', name: "Add Product", component: AddProduct},
    {path: '/admin/edit-product/:id', name: "Edit Product", component: EditProduct, props: true}
    //End Admin Routes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
