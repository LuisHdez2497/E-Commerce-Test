import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Client/Home.vue';
import ProductDescription from '../views/Client/ProductPreview.vue';
import Checkout from '../views/Client/Checkout.vue';
import Cart from '../views/Client/Cart.vue';

import Login from '../views/Admin/Login.vue';

import Products from '../views/Admin/Products/Products.vue';
import AddProduct from '../views/Admin/Products/AddProduct.vue';
import EditProduct from '../views/Admin/Products/EditProduct.vue';
import ProductPreview from '../views/Admin/Products/ProductPreview.vue';

import Users from '../views/Admin/Users/Users.vue';
import AddUser from '../views/Admin/Users/AddUser.vue';
import EditUser from '../views/Admin/Users/EditUser.vue';

const routes = [
    //Client Routes
    {path: '/', name: "Home", component: Home},
    {path: '/product-preview/:id/:slug', name: "Product Description", component: ProductDescription, props: true},
    {path: '/checkout', name: "Checkout", component: Checkout, props: true},
    {path: '/cart', name: "Cart", component: Cart, props: true},
    //End Client Routes

    //Admin Routes
    {path: '/login', name: "Login", component: Login},

    {path: '/admin/products', name: "Products", component: Products},
    {path: '/admin/add-product', name: "Add Product", component: AddProduct, props: true},
    {path: '/admin/edit-product/:id', name: "Edit Product", component: EditProduct, props: true},
    {path: '/admin/product-preview/:id', name: "Product Preview", component: ProductPreview, props: true},

    {path: '/admin/users', name: "Users", component: Users},
    {path: '/admin/add-user', name: "Add User", component: AddUser, props: true},
    {path: '/admin/edit-user/:id', name: "Edit User", component: EditUser, props: true},
    //End Admin Routes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
