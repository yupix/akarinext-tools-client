<template>
  <Header></Header>
  <!--
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    <router-link to="/misskey">Misskey</router-link>
  </div>-->

  <router-view />
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
