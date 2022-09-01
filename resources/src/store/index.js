import { createStore } from "vuex";
import axios from "axios";

//Base URL
axios.defaults.baseURL = '//127.0.0.1:8000';
//End Base URL

export default createStore({
    state: {
        product: {},
        products: [],
        media: {},

        user: {},
        users: []
    },

    mutations: {
        //Products
        SET_PRODUCT(state, product){
            state.product = product;
        },
        SET_PRODUCTS(state, products){
            state.products = products;
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
});
