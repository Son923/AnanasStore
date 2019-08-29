<template>
<div>
  <main id="mainContent">
    <HomeBanner id="home-banner"/>
    <HomeCollection id="home-collection"/>
  </main>
</div>
</template>

<script>
import HomeCollection from "@/components/HomeCollection";
import HomeBanner from "@/components/HomeBanner";

export default {
  name: "Blank",
  components: {
    HomeCollection,
    HomeBanner,
  },
};
</script>

<style scoped>

</style>
