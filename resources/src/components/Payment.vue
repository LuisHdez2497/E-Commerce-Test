<template>
    <div class="shadow-2xl bg-white border-t-8 border-orange-400 rounded-lg p-5 m-5 w-full">
        <h4 class="text-3xl text-gray-700 mb-5">Informacion de pago</h4>
        <div class="p-10 rounded-md bg-white">
            <div class="mb-6">
                <label class="block mb-3 text-gray-600" for="">Nombre en la tarjeta</label>
                <input type="text"
                       class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
                       required/>
            </div>
            <div class="mb-6">
                <label class="block mb-3 text-gray-600" for="">Numero de tarjeta</label>
                <input
                    type="tel"
                    class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                    required/>
            </div>
            <div class="mb-6 flex flex-wrap -mx-3w-full">
                <div class="w-2/3 px-3">
                    <label class="block mb-3 text-gray-600" for="">Fecha de Expiracion</label>
                    <div class="flex">
                        <select
                            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest mr-6"
                            required>
                            <option>Mes</option>
                        </select>
                        <select
                            class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                            required>
                            <option>Año</option>
                        </select>
                    </div>
                </div>
                <div class="w-1/3 px-3">
                    <label class="block mb-3 text-gray-600" for="">CVC</label>
                    <input type="tel"
                           class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-widest"
                           required/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Payment"
};
</script>
