<template>
    <div v-if="visible" class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <div class="modal-header">
                <h3 style="font-weight: 1000;">Login</h3>
                <button class="close-button" @click="close">×</button>
            </div>
            <div class="modal-body">
                <label for="email">Email:</label>
                <input type="text" name="email" id="email" v-model="loginData.email">
                <label for="password">Password:</label>
                <input type="password" name="password" id="password" v-model="loginData.password">
            </div>
            <div class="modal-footer">
                <button @click="login">Login&Register</button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import http from '@/utils/http'
    import { useUserStore } from '@/stores/user';
    import Cookie from 'js-cookie';

    const props = defineProps({
        visible: Boolean
    })

    const emit = defineEmits(['close'])

    const loginData = ref({
        email: '',
        password: ''
    })
    const user = useUserStore();

    const close = () => {
        emit('close');
    }

    const login = async () => {
        // 返回的是res.json({"success": true, "token": token })
        await http.post('/users/login', loginData.value).then(res => {
            if (res.success) {
                user.setToken(res.token);
                Cookie.set('token', res.token, { expires: 1 });
                user.setEmail(loginData.value.email);
                Cookie.set('email', loginData.value.email, { expires: 1 });
                close();
                console.log(user.data);
            }
        }).catch(res => {
            console.log(res.error);
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
        width: 400px;
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-row-gap: 1em;
    }

    .modal-footer {
        text-align: right;
        margin-top: 20px;
    }
</style>