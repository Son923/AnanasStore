<template>
<div>
  <main id="mainContent">
    <HomeBanner id="home-banner"/>
    <HomeCollection id="home-collection"/>
    <HomeBuy id="home-buy"/>
  </main>
</div>
</template>

<script>
import HomeCollection from "@/components/HomeCollection";
import HomeBanner from "@/components/HomeBanner";
import HomeBuy from "@/components/HomeBuy"

export default {
  name: "Blank",
  components: {
    HomeCollection,
    HomeBanner,
    HomeBuy,
  },
};
</script>

<style scoped>

</style>
