<template>
  <nav>
    <!-- bind to attribute instead of using direct route 
    endpoint is free to be changed to whatever it needs to be from the route page
    no need to update code when route endpoint changes -->
    <router-link v-bind:to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link to="/testcomputed">Try computed values</router-link>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/testcomputed" >Try computed values</router-link> -->
    <br />
    <a href="/">Home Reload </a>
    <p>(use a tag instead of router-link, vue does NOT intercept this route)</p>
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
