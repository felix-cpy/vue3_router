<template>
  <nav>
    <!-- bind to attribute instead of using direct route 
    endpoint is free to be changed to whatever it needs to be from the route page
    no need to update code when route endpoint changes -->
    <router-link v-bind:to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'testComputedProp' }"
      >Try computed values</router-link
    >
    |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/testcomputed" >Try computed values</router-link> -->
    <br />
    <div style="border: 1px dashed purple ; margin-top: 10px">
      <a href="/">Home Reload </a>
      <p>
        (use a tag instead of router-link, vue does NOT intercept this route)
      </p>
    </div>
  </nav>
  <div class="nav-button-container">
    <button @click="goHome">Go Home</button>
    <button @click="goBack">Go Back</button>
    <button @click="goForward">Go Forward</button>
  </div>
  <router-view />
</template>

<script>
// import HelloWorldVue from "./pages/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld: HelloWorldVue,
  // },
  methods: {
    goHome() {
      this.$router.push({ name: "home" });
    },
    goBack() {
      console.log(this.$router);
      this.$router.go(-1);
    },
    goForward() {
      this.$router.go(1);
    }
  }
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

.nav-button-container button {
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  border: none;
  background-color: lightblue;
}
.nav-button-container button:hover {
  background-color: lightgray;
  color: #2c3e50;
}
</style>
