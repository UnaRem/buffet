<template>
  <div class="container-two">
    <div class="left-column">
      <img :src="images[0]" alt="Image 1" />
      <img :src="images[1]" alt="Image 2" />
      <img :src="images[2]" alt="Image 3" />
    </div>
    <div class="right-column">
      <img :src="images[3]" alt="Image 4" style="height:100%;object-fit: cover;" />
      <img :src="images[4]" alt="Image 5" style="height:100%;object-fit: cover;" />
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    images: Array
  })
</script>

<style scoped>
  .container-two {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 1140px;
    /* Adjust as needed */
  }

  .left-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .right-column {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }

  .left-column img,
  .right-column img {
    width: 100%;
    height: auto;
  }

  .right-column img:first-of-type {
    height: 100%;
  }

  .right-column img:nth-of-type(2),
  .right-column img:nth-of-type(3) {
    height: 100%;
  }
</style>
