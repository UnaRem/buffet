import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", () => {

    const data = ref([]);

    const addToCart = (item) => {
        // 没有找到相同商品，则添加，有找到则数量加一
        const index = data.value.findIndex((i) => i.id === item.id);
        if (index === -1) {
            data.value.push({ ...item, quantity: 1 });
        } else {
            data.value[index].quantity++;
        }
    };

    const removeFromCart = (item) => {
        data.value = data.value.filter((i) => i.id !== item.id);
    };

    const clearCart = () => {
        data.value = [];
    };

    const totalPrice = computed(() => {
        return data.value.reduce((acc, item) => acc + item.price, 0);
    });

    const cartList = computed(() => {
        return data.value.map((item) => {
            return {
                id: item.id,
                productName: item.productName,
                price: item.price,
                quantity: item.quantity,
            };
        });
    });

    return { data, addToCart, removeFromCart, clearCart, totalPrice, cartList };

});