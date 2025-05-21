<template>
  <div>
    <div class="container-one">
      <div class="image-column">
        <img :src="images[0]" alt="Image 1" style="height: 100%;object-fit: cover;" />
      </div>
      <div class="image-column">
        <img :src="images[1]" alt="Image 2" />
        <img :src="images[2]" alt="Image 3" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    images: Array
  })
</script>

<style scoped>
  .container-one {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    max-width: 1140px;
    /* Adjust as needed */
  }

  .image-column {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .image-column img {
    width: 100%;
    height: auto;
  }
</style>