<template>
    <div class="main">
        <div class="container">
            <div class="main-top-header">HOME</div>
            <div class="main-title">Our Restaurant</div>
            <div class="water-fall" style="width: 100%;height: auto;">

                <water-fall3 :images="waterFallImages3" style="padding-bottom: 10px;" />

                <water-fall5 :images="waterFallImages5" />

            </div>
            <div class="main-title">Contact Us</div>
            <hr style="background-color: #000;width: 100%; height: 2px;">

            <contact-component />
        </div>
    </div>
</template>

<script setup>

    import { ref, onMounted } from 'vue';

    const images = ref([]);
    const waterFallImages3 = ref([]);
    const waterFallImages5 = ref([]);

    onMounted(async () => {
        // 使用 import.meta.glob 读取图片目录
        const context = import.meta.glob('@/assets/gallery/*.{jpg,jpeg,png,gif}');

        // 动态加载图片
        const imagePromises = Object.values(context).map(async (importFn) => {
            const module = await importFn();
            return module.default; // 图片的 URL
        });

        // 解析所有图片的 Promise
        images.value = await Promise.all(imagePromises);

        // 随机选择 3 张图片
        waterFallImages3.value = images.value.slice(0, 3);
        // 最后5张
        waterFallImages5.value = images.value.slice(images.value.length - 5);
    });

</script>

<style scoped>
    .main {
        background-image: url('@/assets/background/bg-pattern-gray.png');
        /* transition: all 0.5s; */
    }

    .container {
        max-width: 1140px;
        min-width: 1140px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 0;
    }

    .main-top-header {
        color: #999;
        font-family: 'Poppins';
        font-weight: 600;
    }

    .main-title {
        font-size: 60px;
        color: #000;
        font-family: 'EB Garamond';
    }

    .water-fall {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

</style>