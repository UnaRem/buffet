<template>

    <div class="footer">
        <div class="container">
            <div class="footer-top">
                <span><a @click="changeMenu(false)">HOME</a></span>
                <span> | </span>
                <span><a @click="changeMenu(true)">MENU</a></span>
            </div>
            <div class="media">
                <span><a href="#">FaceBook</a></span>
                <span> | </span>
                <span><a href="#">Insgram</a></span>
            </div>
            <div class="copyright">
                <span>&copy; Powered by Tokyo Buffet&Grill. Tokyo Buffet&Grill all rights reserved.</span>
            </div>
        </div>
    </div>

</template>

<script setup>

    const props = defineProps({
        changeMenu: Function
    })

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

    .footer {
        background-color: #79271f;
        height: 468px;
        display: flex;
        align-items: center;
    }

    .footer .container {
        max-width: 1140px;
        min-width: 1140px;
        margin: 0 auto;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .footer .container div {
        padding: 0 0 20px 0;
    }

    .footer a {
        font-weight: 600;
    }
</style>