<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/testcomputed" >Try computed values</router-link>
  </nav>
  <router-view />
</template>

<script>
// import HelloWorldVue from "./pages/HelloWorld.vue";

export default {
  name: "App"
  // components: {
  //   HelloWorld: HelloWorldVue,
  // },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
