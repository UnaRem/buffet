<template>
    <div class="menu">
        <div class="container">
            <div class="menu-top-header">MENU</div>
            <div class="menu-title" v-if="user.data.token">NOW</div>
            <div class="menu-container" v-if="user.data.token">
                <div class="menu-column">
                    <div class="menu-item" v-for="item in menu.slice(0, 3)" :key="item.id">
                        <div class="menu-item-name">{{ item.productName }}</div>
                        <div class="menu-item-price">$ {{ item.price }} <button @click="addToCart(item)">ADD</button>
                        </div>
                    </div>
                </div>
                <div class="menu-column">
                    <div class="menu-item" v-for="item in menu.slice(3, 6)" :key="item.id">
                        <div class="menu-item-name">{{ item.productName }}</div>
                        <div class="menu-item-price">$ {{ item.price }} <button @click="addToCart(item)">ADD</button>
                        </div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">kids under 3 eat free</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">senior citizen(65&older)10% discount</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">8 people up gratuity 10% per table</div>
                    </div>
                </div>
            </div>

            <div class="menu-title" v-if="!user.data.token">Monday - Friday</div>
            <div class="menu-container" v-if="!user.data.token">
                <div class="menu-column">
                    <div class="menu-item-head">Lunch( 11:00am - 3:29pm )</div>
                    <div class="menu-item">
                        <div class="menu-item-name">Adult</div>
                        <div class="menu-item-price">$11.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(3_5 years)</div>
                        <div class="menu-item-price">$5.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(6_10 years)</div>
                        <div class="menu-item-price">$8.50</div>
                    </div>
                </div>
                <div class="menu-column">
                    <div class="menu-item-head">
                        Dinner( 3:30pm - 9:30pm )
                        <br>
                        (Friday: 3:30pm - 10:00pm )
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Adult</div>
                        <div class="menu-item-price">$15.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(3_5 years)</div>
                        <div class="menu-item-price">$7.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(6_10 years)</div>
                        <div class="menu-item-price">$10.98</div>
                    </div>
                </div>
            </div>
            <div class="menu-title" v-if="!user.data.token">Saturday - Sunday</div>
            <div class="menu-container" v-if="!user.data.token">
                <div class="menu-column">
                    <div class="menu-item-head">
                        All Day Dinner Buffet( 11:00am - 10:00pm )
                        <br>
                        (Sunday: 11:00am - 9:30pm )
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Adult</div>
                        <div class="menu-item-price">$16.50</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(3_5 years)</div>
                        <div class="menu-item-price">$7.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Kids(6_10 years)</div>
                        <div class="menu-item-price">$11.98</div>
                    </div>
                </div>
                <div class="menu-column">
                    <div class="menu-item">
                        <div class="menu-item-name">ALL Drink</div>
                        <div class="menu-item-price">$2.50</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Japanese soda</div>
                        <div class="menu-item-price">$3.00</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">Milk/Juice(no refill)</div>
                        <div class="menu-item-price">$10.98</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">kids under 3 eat free</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">senior citizen(65&older)10% discount</div>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-name">8 people up gratuity 10% per table</div>
                    </div>
                </div>
            </div>
            <div class="menu-title">Contact Us</div>
            <hr style="background-color: #000;width: 100%; height: 2px;">
            <contact-component />
        </div>
    </div>
</template>

<script setup>
    import { useUserStore } from '@/stores/user';
    import { useCartStore } from '@/stores/cart';
    import http from '@/utils/http';
    import { ref, onMounted } from 'vue';

    const user = useUserStore();
    const cart = useCartStore();
    const menu = ref([]);

    const getMenu = async () => {
        try {
            const res = await http.get('/menu');
            menu.value = res.map(item => {
                item.productName = item.productName.replace('6-7-', '').replace('-晚餐', '').replace('-午餐', '').replace('成人', 'Adult').replace('儿童', 'Kids').replace('所有饮料', 'ALL Drink').replace('日本苏打', 'Japanese soda').replace('牛奶/果汁(无续杯)', 'Milk/Juice(no refill)');
                return item
            });
        } catch (error) {
            console.log(error);
        }
    }

    const addToCart = (item) => {
        // console.log(item);
        if (user.data.token) {
            cart.addToCart(item);
        } else {
            alert('請先登入');
        }
    }

    onMounted(() => {
        getMenu();
    })

</script>

<style scoped>

    .menu {
        background-image: url('@/assets/background/bg-pattern-gray.png');
        /* transition: all 0.5s; */
    }

    .menu * {
        font-weight: 600;
    }

    .menu .container {
        max-width: 1140px;
        min-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;
    }

    .menu-top-header {
        color: #999;
    }

    .menu-title {
        font-size: 60px;
        color: #000;
        margin: 20px 0;
    }

    .menu-container {
        width: 1140px;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        padding: 85px 90px;
        font-size: 24px;
        color: #000;
        font-weight: 600;
        justify-content: space-between;
    }

    .menu-column {
        display: flex;
        flex-direction: column;
        width: 40%;
    }

    .menu-column>div {
        line-height: 1.25;
        border-bottom: 1px solid #dee2e6;
        min-height: 3em;
        padding: 0 0 5px 0;
    }

    .menu-item {
        display: flex;
        justify-content: space-between;
        border-bottom: 0px;
        align-items: center;
    }

    .menu-item-price {
        color: #ad9a7c;
        display: flex;
    }

    .menu-item-price button {
        margin-left: 1em;
    }

</style>