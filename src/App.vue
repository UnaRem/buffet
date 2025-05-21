<template>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <header-component :changeMenu="changeMenu" @openLoginModal="openLoginModal" @openCartModal="openCartModal"
        @openOrderModal="openOrderModal" />

    <main-component v-if="!menu" ref="main" />

    <menu-component v-if="menu" />

    <footer-component :changeMenu="changeMenu" />

    <login-modal :visible="onLoginModal" @close="closeLoginModal" />
    <cart-modal :visible="onCartModal" @close="closeCartModal" />
    <order-modal :visible="onOrderModal" @close="closeOrderModal" :orderList="orderList" />
    <loading-modal :show="loading" />

</template>

<script setup>

    import { onMounted, ref } from "vue";
    import { useUserStore } from "./stores/user";
    import http from '@/utils/http'
    import Cookie from 'js-cookie';

    const menu = ref(false);
    const main = ref(null);
    const onLoginModal = ref(false);
    const onCartModal = ref(false);
    const onOrderModal = ref(false);
    const orderList = ref([]);
    const user = useUserStore();
    const loading = ref(false);

    const closeLoginModal = () => {
        onLoginModal.value = false;
    };

    const openLoginModal = () => {
        if (!Cookie.get('token')) {
            onLoginModal.value = true;
        }
    };

    const closeCartModal = () => {
        onCartModal.value = false;
    };

    const openCartModal = () => {
        if (user.data.token) {
            onCartModal.value = true;
        } else {
            alert("请先登录");
        }
    };

    const closeOrderModal = () => {
        onOrderModal.value = false;
        orderList.value = [];
    };

    const openOrderModal = async () => {
        await getOrderList();
        if (user.data.token && orderList.value.length > 0) {
            onOrderModal.value = true;
        } else {
            alert("请先登录");
        }
    };
    // 向header-component传递一个可以携带参数的函数来修改menu的值
    const changeMenu = (value) => {
        menu.value = value;
        // console.log("menu:" + value);
    };

    const userCookie = () => {
        const token = Cookie.get('token');
        if (token) {
            user.setToken(token);
            user.setEmail(Cookie.get('email'));
        }
    }

    const getOrderList = async () => {
        loading.value = true;
        await http.get('/orders', { headers: { Authorization: `Bearer ${user.data.token}` }, timeout: 10 * 1000 }).then(res => {
            if (res.success) {
                orderList.value = res.orderList;
            }
            loading.value = false;
            // console.log(res)
        }).catch(err => {
            close();
            console.log(err);
        })
    }

    onMounted(() => {
        userCookie();
    })

</script>


<style scoped></style>
