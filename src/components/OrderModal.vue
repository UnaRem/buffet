<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="font-weight: 1000;">Recipt</h3>
                <button class="close-button" @click="close">×</button>
            </div>
            <div class="modal-body">
                <div class="order-item" v-for="order in orderList" :key="order.id">
                    <div class="order-info">
                        <div>ID:{{ order.id }}</div>
                        <div>Total:${{ order.price }}</div>
                        <div>Pay Status:{{ order.status }}</div>
                    </div>
                    <div v-for="(item, index) in order.orderItems" :key="index" class="order-item-info">
                        <div>
                            <div>{{ item.product.productName }}</div>
                            <div>${{ item.product.price }}</div>
                        </div>
                        <div>SubTotal<br>${{ item.price }}</div>
                        <div>{{ item.quantity }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '@/stores/user';

    const props = defineProps({
        visible: Boolean,
        orderList: Array
    })

    const emit = defineEmits(['close'])

    const user = useUserStore();

    const close = () => {
        emit('close');
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
        /* width: 400px; */
        max-height: 600px;
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

    .modal-body {
        margin-top: 10px;
        max-height: 500px;
        overflow: auto;
        -ms-overflow-style: none;
        /* 适用于 IE 和 Edge */
        scrollbar-width: none;
        /* 适用于 Firefox */
    }

    .modal-body::-webkit-scrollbar {
        display: none;
    }

    .order-item {
        display: flex;
        margin: 2em 1em;
        padding: 1em 2em;
        flex-direction: column;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        background-color: rgba(236, 235, 235, 0.568);
    }

    .order-info {
        display: flex;
        flex-direction: row;
    }

    .order-info>div {
        padding: 0.5em 1em;
    }

    .order-item-info {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        padding: 0 0 0.5em 0;
    }

    .order-item-info>div:first-child {
        display: flex;
        flex-direction: column;
    }

    .order-item-info>div:last-child {
        position: absolute;
        right: 5%;
        top: 5%;
        border-radius: 50%;
        width: 2em;
        height: 2em;
        text-align: center;
        line-height: 2em;
        background-color: tomato;
        color: #fff;
    }

    .order-item-info>div:first-child>div,
    .order-item-info>div:nth-child(2) {
        padding: 0.5em 1em;
        text-align: center;
    }

    .modal-footer {
        text-align: right;
        margin-top: 20px;
    }
</style>