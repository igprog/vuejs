<template>
  <div id="app">
    <navbar/>
    <div class="row">
      <sidebar/>
      <div class="col pt-5">
        <div class="container">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";

export default {
  name: "App",
  components: {
    navbar,
    sidebar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo {
  height: 30px;
}
</style>
