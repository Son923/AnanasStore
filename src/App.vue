﻿<template>
  <div>
    <TheNavBar />
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "app",
  components: {
    TheNavBar,
    TheFooter
  }
};
</script>

<style>
html {
  position: relative;
  min-height: 100%;
}

body {
  margin-bottom: 300px !important; /* Height of the footer */
  padding: 0;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 300px; /* Set the fixed height of the footer here */
  padding-left: 100px !important;
  padding-right: 100px !important;

}

/* Override Bootstrap Styling */

.btn-primary {
  background-color: #025fce !important;
}

button:focus,
button:active {
  outline: none !important;
  box-shadow: none !important;
}
</style>
