import { createStore } from "vuex";
import axios from "axios";

//Base URL
axios.defaults.baseURL = '//127.0.0.1:8000';
//End Base URL

export default createStore({
    state: {
        product: {},
        products: []
    },

    mutations: {
        //Products
        SET_PRODUCT(state, product){
            state.product = product;
        },
        SET_PRODUCTS(state, products){
            state.products = products;
        },
    },

    actions: {
        //Products
        getProducts({commit}){
            axios.get('/api/get-products')
                .then(response => {
                    commit('SET_PRODUCTS', response.data)
                }).catch(error=> console.log(error))
        },
        insertProduct({commit}){
            var obj;
            axios.post('/api/create-product', this.state.product)
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
            axios.put('/api/update-product/'+this.state.product.id, this.state.product)
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
    },
});
