<template>
  <main id="mainContent">
    <div class="text-center header">
      <!-- Carousel usage: https://ssense.github.io/vue-carousel/guide/ -->
      <carousel :perPage="1" :paginationEnabled="false" :autoplay="true" :loop="true">
        <slide>
          <img src="@/assets/desktop_home1.jpg" alt="">
        </slide>
        <slide>
          <img src="@/assets/desktop_home2.jpg" alt="">
        </slide>
        <slide>
          <img src="@/assets/desktop_home3.jpg" alt="">
        </slide>
      </carousel>
    </div>
  </main>
</template>

<script>
export default {
    name: "HomeBanner",
}
</script>

<style scoped>
.header {
  height: 800px;
  background-color: orange; 
}
.header img {
  object-fit: cover;
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>