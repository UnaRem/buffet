<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="font-weight: 1000;">Cart</h3>
                <button class="close-button" @click="close">×</button>
            </div>
            <div class="modal-body">
                <div>
                    <div style="background-color: #c1c1c1;padding: 2px 4px;border-radius: 4px;">Product Name</div>
                    <div style="background-color: #c1c1c1;padding: 2px 4px;border-radius: 4px;">Price</div>
                    <div style="background-color: #c1c1c1;padding: 2px 4px;border-radius: 4px;">Quantity</div>
                    <div v-for="item in cart.cartList" :key="item.id" style="display: contents;">
                        <div>{{ item.productName }}</div>
                        <div>${{ item.price }}</div>
                        <div>{{ item.quantity }}</div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="checkOut">Check Out</button>
                <button @click="cart.clearCart">Clear Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useCartStore } from '@/stores/cart';
    import { useUserStore } from '@/stores/user';
    import http from '@/utils/http';

    const props = defineProps({
        visible: Boolean
    })

    const emit = defineEmits(['close'])

    function close() {
        emit('close');
    }

    const cart = useCartStore();
    const user = useUserStore();

    const checkOut = async () => {
        await http.post('/orders/create', { 'products': cart.cartList.map(item => { return { "id": item.id, "quantity": item.quantity } }) }, { headers: { 'Authorization': 'Bearer ' + user.data.token } }).then(res => {
            console.log(res);
            cart.clearCart();
            close();
            // 创建一个临时的 DOM 元素来插入表单
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = res;

            // 将表单插入到文档中
            document.body.appendChild(tempDiv);

            // 使用 setTimeout 确保 DOM 渲染后再提交表单
            setTimeout(() => {
                const form = tempDiv.querySelector('form');
                if (form) {
                    form.submit();
                } else {
                    console.error('No form found in the response');
                }
            }, 100); // 延迟 100 毫秒，确保表单已渲染
        }).catch(err => {
            console.log(err);
        })
    }

</script>

<style scoped>

    /* 取消input聚焦的边框 */
    input:focus {
        outline: none;
    }

    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        border-radius: 5px;
        padding: 20px;
        min-width: 400px;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
    }

    .modal-body>div {
        margin-top: 10px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1em;
        grid-row-gap: 0.5em;
    }

    .modal-footer {
        text-align: right;
        margin-top: 20px;
    }
</style>