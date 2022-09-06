import { createStore } from "vuex";
import axios from "axios";
import {commit} from "lodash/seq";

//Base URL
axios.defaults.baseURL = 'https://www.webforcetest.lunaricode.com';
//End Base URL

const localStorage = window.localStorage;

function reloadLocalStorage(cart, products){
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('products', JSON.stringify(products));
}

export default createStore({
    state: {
        cartItems: [],

        product: {},
        products: [],
        media: {},

        user: {},
        users: []
    },

    mutations: {
        //Cart
        ADD_ITEM_CART(state, { itemId, quantity }){
            state.cartItems.push({
                itemId: itemId,
                quantity: quantity
            });
            reloadLocalStorage(state.cartItems, state.products);
        },
        REMOVE_ITEM_CART(state, { itemId }){
            const cartItem = state.cartItems.find(item => item.itemId == itemId);
            if (cartItem) {
                state.cartItems.splice(state.cartItems.indexOf(cartItem), 1);
            }
            reloadLocalStorage(state.cartItems, state.products);
        },
        INCREMENT_QUANTITY_BY_CART_ITEM(state, { itemId, quantity }){
            const cartItem = state.cartItems.find(item => item.itemId == itemId);
            if (cartItem) {
                cartItem.quantity += quantity;
            }
            reloadLocalStorage(state.cartItems, state.products);
        },
        DECREMENT_QUANTITY_BY_CART_ITEM(state, { itemId }){
            console.log(itemId)
            const cartItem = state.cartItems.find(item => item.itemId == itemId);
            if (cartItem) {
                cartItem.quantity --;
            }
            reloadLocalStorage(state.cartItems, state.products);
        },
        RELOAD_CART(state, cart){
            state.cartItems = cart;
            reloadLocalStorage(state.cartItems, state.products);
        },

        //Products
        SET_PRODUCT(state, product){
            state.product = product;
        },
        SET_PRODUCTS(state, products){
            state.products = products;
            reloadLocalStorage(state.cartItems, state.products);
        },
        SET_MEDIA(state, media){
            state.media = media;
        },

        //Users
        SET_USER(state, user){
            state.user = user;
        },
        SET_USERS(state, users){
            state.users = users;
        },
    },

    actions: {
        //Cart
        reloadCart({commit}) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            let products = JSON.parse(localStorage.getItem('products'));
            commit('RELOAD_CART', (cart != null) ? cart : []);
            commit('SET_PRODUCTS', (products != null) ? products : [])
        },

        addItemToCart({ state, commit }, product) {
            if (product.status > 0 ) {
                const cartItem = state.cartItems.find(
                    item => item.itemId == product.id
                );
                if (!cartItem) {
                    commit("ADD_ITEM_CART", { itemId: product.id, quantity: product.quantity });
                } else {
                    commit("INCREMENT_QUANTITY_BY_CART_ITEM", { itemId: product.id, quantity: product.quantity });
                }
            }
        },
        removeItemFromCart({commit}, itemId) {
            commit('REMOVE_ITEM_CART', {itemId: itemId})
        },
        incrementQuantityByCartItem({ state, commit }, { itemId }) {
            const cartItem = state.cartItems.find(item => item.itemId == itemId);
            if (cartItem) {
                commit("INCREMENT_QUANTITY_BY_CART_ITEM", { itemId: itemId, quantity: 1 });
            }
        },
        decrementQuantityByCartItem({ state, commit }, { itemId }) {
            const cartItem = state.cartItems.find(item => item.itemId == itemId);
            if (cartItem) {
                if (cartItem.quantity > 1){
                    commit("DECREMENT_QUANTITY_BY_CART_ITEM", { itemId: itemId });
                }else {
                    commit('REMOVE_ITEM_CART', {itemId: itemId})
                }
            }
        },

        //Products
        getProducts({commit}){
            axios.get('/api/products')
                .then(response => {
                    commit('SET_PRODUCTS', response.data)
                }).catch(error=> console.log(error))
        },
        showProduct({commit}){
            axios.get('/api/product-preview/'+this.state.product.id)
                .then(response => {
                    commit('SET_PRODUCT', response.data)
                    commit('SET_MEDIA', response.data.media[0])
                }).catch(error=> console.log(error))
        },
        insertProduct({commit}){
            var obj;
            axios.post('/api/add-product', this.state.product)
                .then(response => {
                    commit('SET_PRODUCT', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_PRODUCT', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },
        updateProduct({commit}){
            var obj;
            axios.put('/api/edit-product/'+this.state.product.id, this.state.product)
                .then(response => {
                    commit('SET_PRODUCT', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_PRODUCT', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },
        deleteProduct({commit}){
            var obj;
            axios.delete('/api/delete-product/'+this.state.product.id)
                .then(response => {
                    commit('SET_PRODUCT', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_PRODUCT', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },

        //Users
        getUsers({commit}){
            axios.get('/api/users')
                .then(response => {
                    commit('SET_USER', response.data)
                }).catch(error=> console.log(error))
        },
        showUser({commit}){
            axios.get('/api/user-preview'+this.state.user.id)
                .then(response => {
                    commit('SET_USER', response.data)
                }).catch(error=> console.log(error))
        },
        insertUser({commit}){
            var obj;
            axios.post('/api/add-user', this.state.user)
                .then(response => {
                    commit('SET_USER', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_USER', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },
        updateUser({commit}){
            var obj;
            axios.put('/api/edit-user/'+this.state.user.id, this.state.user)
                .then(response => {
                    commit('SET_USER', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_USER', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },
        deleteUser({commit}){
            var obj;
            axios.delete('/api/delete-user/'+this.state.product.id)
                .then(response => {
                    commit('SET_USER', {});
                    var element = '<div class="alert alert-success message-error">'+
                        '<span>'+ response.data.message +'</span>'+
                        '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                        '</div>';

                    document.getElementById('notifications').innerHTML += element;
                })
                .catch(error => {
                    commit('SET_USER', {});
                    obj = error.response.data.errors;
                    Object.keys(obj).forEach(key => {
                        var element = '<div class="alert alert-danger message-error">'+
                            '<span>'+ obj[key][0] +'</span>'+
                            '<button onclick="this.parentNode.remove()" type="button" class="close" aria-label="Close"> x </button>'+
                            '</div>';

                        document.getElementById('notifications').innerHTML += element;
                    });
                })
        },
    },
    getters: {
        getCartItems: (state) => {
            let lo = localStorage.getItem('cart')
            const products = state.products
            return state.cartItems.map(({ itemId, quantity }) => {
                let product = products.find(
                    prod => prod.id == itemId
                );
                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    media: '/storage/'+product.media[0].model_id+'/'+product.media[0].file_name,
                    quantity: quantity,
                    inventory: product.inventory
                };
            });
        },

        getCartTotal: (state, getters) => {
            return getters.getCartItems.reduce((total, product) => {
                return total + product.price * product.quantity;
            }, 0);
        }
    }
});
