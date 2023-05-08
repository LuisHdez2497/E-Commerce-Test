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
    {path: '/', name: "Inicio", component: Home},
    {path: '/vista-previa/:id/:slug', name: "Descripcion del Producto", component: ProductDescription, props: true},
    {path: '/checkout', name: "Verificar", component: Checkout, props: true},
    {path: '/carrito', name: "Carrito", component: Cart, props: true},
    //End Client Routes

    //Admin Routes
    {path: '/login', name: "Iniciar Sesión", component: Login},

    {path: '/admin/productos', name: "Productos", component: Products},
    {path: '/admin/agregar-producto', name: "Agregar Producto", component: AddProduct, props: true},
    {path: '/admin/editar-producto/:id', name: "Editar Producto", component: EditProduct, props: true},
    {path: '/admin/vista-producto/:id', name: "Vista Previa Producto", component: ProductPreview, props: true},

    {path: '/admin/usuarios', name: "Usuarios", component: Users},
    {path: '/admin/agregar-usuario', name: "Agregar User", component: AddUser, props: true},
    {path: '/admin/editar-usuario/:id', name: "Editar Usuario", component: EditUser, props: true},
    //End Admin Routes
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
