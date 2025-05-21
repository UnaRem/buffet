<template>

    <div class="header">
        <div class="container">
            <div class="header-top">
                <div class="header-top-address">
                    <div>
                        <a href="https://maps.app.goo.gl/kkDYPr5ekkbqE6PW8"> 285 E Coliseum Blvd, Fort Wayne, IN 46805
                        </a>
                    </div>
                    <div> | </div>
                    <div> Sun-Thu 11:00am-21:30pm, Fri-Sat 11:00am-22:00pm </div>
                </div>
                <div class="header-top-tel">
                    <div>
                        <a href="tel:+12609098367"> TEL : +1(260)909-8367 </a>
                    </div>
                </div>
            </div>
            <div class="header-main">
                <div><a @click="changeMenu(false)">HOME</a></div>
                <div>
                    <img src="@/assets/logo/logo.png" width="200px">
                </div>
                <div><a @click="changeMenu(true)">MENU</a></div>
            </div>
            <div class="profile">
                <div v-if="!user.data.token">
                    You No Login!
                </div>
                <div v-else>
                    {{ user.data.email }}
                </div>
                <div class="icon" @click="openLoginModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff"
                        class="bi bi-person-bounding-box" viewBox="0 0 16 16">
                        <path
                            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                </div>
                <div class="icon" @click="openCartModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-cart-fill"
                        viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>
                <div class="icon" v-if="user.data.token" @click="openOrderModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff" class="bi bi-receipt"
                        viewBox="0 0 16 16">
                        <path
                            d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                        <path
                            d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </div>
                <div class="icon" @click="logout" v-if="user.data.token">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#fff"
                        class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z" />
                        <path fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
    import { useUserStore } from '@/stores/user';
    import Cookies from 'js-cookie';


    const props = defineProps({
        changeMenu: Function
    })

    const emit = defineEmits(['openLoginModal', 'openCartModal', 'openOrderModal'])

    const openLoginModal = () => {
        emit('openLoginModal')
    }
    const openCartModal = () => {
        emit('openCartModal')
    }

    const openOrderModal = () => {
        emit('openOrderModal')
    }

    const user = useUserStore();

    const logout = () => {
        user.clearUser();
        Cookies.remove('token');
        Cookies.remove('email');
        location.reload();
    }

</script>

<style scoped>

    a {
        text-decoration: none;
        color: #fff;
        transition: 0.4s;
        padding: 3px;
        position: relative;
    }

    a::after {
        content: '';
        border-bottom: 2px solid #fff;
        position: absolute;
        width: 0;
        left: 0;
        top: 100%;
        transition: width 0.4s ease;
        /* 过渡效果 */
    }

    a:hover {
        cursor: pointer;
    }

    @media (hover: hover) {
        a:hover::after {
            /* background-color: hsla(160, 100%, 37%, 0.2); */
            width: 100%;
        }
    }

    .header {
        background-color: #79271f;
        /* height: 178px; */
    }

    .header .container {
        max-width: 1140px;
        min-width: 1140px;
        margin: 0 auto;
        color: #c8a2a2;
        display: flex;
        flex-direction: column;
    }

    .header-top-address {
        display: flex;
    }

    .header-top {
        display: flex;
        justify-content: space-between;
        padding: 20px 0 0 0;
    }

    .header-main {
        display: flex;
        justify-content: center;
        color: #fff;
        align-items: center;
        margin: 20px 0 0 0;
        padding: 0 0 20px 0;
    }

    .header-main a {
        font-weight: 600;
    }

    .profile {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
    }

    .profile svg {
        margin: 5px;
    }

    .icon:hover {
        cursor: pointer;
    }

</style>