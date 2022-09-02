<template>
    <div id="cart">
        <div class="flex flex-col min-h-screen w-full p-6 space-y-4 sm:p-10 bg-orange-100 text-black">
            <router-link to="/" class="text-4xl bg-transparent opacity-75 hover:opacity-100 text-black font-semibold"><i class="mdi mdi-arrow-left-bold-circle -ml-1 mr-1"></i> Home</router-link>
            <h2 class="text-4xl font-semibold pt-3">Your cart</h2>

            <div class="text-3xl pt-3 text-center font-semibold" v-if="!cartItems.length">"Please add some products to cart"</div>
            <ul v-if="cartItems.length" class="flex flex-col mt-0 p-10 xl:p-20 divide-y divide-gray-700">
                <li v-for="product in cartItems" :key="product.id" class="flex flex-col py-6 sm:flex-row sm:justify-between">
                    <div class="flex w-full space-x-2 sm:space-x-4">
                        <img
                            class="flex-shrink-0 object-cover w-20 h-20 p-5 rounded outline-none md:w-56 md:h-56 bg-gray-500"
                            :src="product.media"
                            alt="Product Image">
                        <div class="flex flex-col justify-between w-full pb-4">
                            <div class="flex justify-between w-full pb-2 space-x-2">
                                <div class="space-y-1 w-10/12">
                                    <h3 class="text-xl font-semibold leading-snug sm:pr-8">{{ product.name }}</h3>
                                    <p class="text-sm text-black">{{ product.description }}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-2xl font-semibold">$ {{ product.price*product.quantity }}</p>
                                </div>
                            </div>
                            <div class="flex text-sm divide-x">
                                <div class="custom-number-input flex justify-between items-end text-center h-20 w-3/4 lg:w-4/12">
                                    <div class="flex flex-col w-7/12">
                                        <label for="custom-input-number" class="w-full text-gray-700 text-sm font-semibold">Quantity</label>
                                        <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                            <button @click="decrementQuantityByCartItem({itemId: product.id, quantity: product.quantity})" data-action="decrement"
                                                    class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-l cursor-pointer outline-none">
                                                <span class="m-auto text-2xl font-bold">−</span>
                                            </button>
                                            <input type="number"
                                                   class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold border-2 border-gray-400 text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
                                                   name="custom-input-number" :value="product.quantity" readonly>

                                            <button @click="incrementQuantityByCartItem({itemId: product.id, quantity: product.quantity})" data-action="increment"
                                                    class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-32 rounded-r cursor-pointer">
                                                <span class="m-auto text-2xl font-bold">+</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button @click="removeItemFromCart(product)" type="button" class="flex items-center px-2 py-1 pl-0 space-x-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                             class="w-6 h-6 fill-current">
                                            <path
                                                d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                            <rect width="32" height="200" x="168" y="216"></rect>
                                            <rect width="32" height="200" x="240" y="216"></rect>
                                            <rect width="32" height="200" x="312" y="216"></rect>
                                            <path
                                                d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                        </svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <div class="space-y-1 text-2xl text-right pt-3">
                <p>Total amount: <span class="text-3xl font-bold">$ {{ cartTotal }}</span></p>
            </div>
            <div class="flex justify-end space-x-4 text-xl pt-5">
                <router-link to="/" class="px-6 py-2 border-2 bg-orange-300 hover:bg-white hover:text-black text-black rounded-md border-orange-300">Back
                    <span class="sr-only sm:not-sr-only">to shop</span>
                </router-link>
                <router-link to="/checkout" class="px-6 py-2 border-2 bg-orange-300 hover:bg-white hover:text-black text-black rounded-md border-orange-300">
                    <span class="sr-only sm:not-sr-only">Continue to </span>Checkout
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Cart",
    computed: {
        ...mapGetters({cartItems: 'getCartItems', cartTotal: 'getCartTotal'})
    },
    methods: {
        ...mapActions({
            removeItemFromCart: 'removeItemFromCart',
            incrementQuantityByCartItem: 'incrementQuantityByCartItem',
            decrementQuantityByCartItem: 'decrementQuantityByCartItem',
        })
    },
};
</script>
