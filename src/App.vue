<template>
  <div id="app">
    <div v-if="!authenticated" class="text-center p-3">
      <h1>{{appname}}</h1>
      <hr/>
    </div>
    <navbar v-if="authenticated" />
    <div class="row">
      <sidebar v-if="authenticated" />
      <div class="col pt-5">
        <div class="container">
          <router-view @authenticated="setAuthenticated" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "./components/navbar.vue";
import sidebar from "./components/sidebar.vue";
import { mixin } from "./mixins/mixin.js";
export default {
  mixins: [mixin],
  name: "App",
  components: {
    navbar,
    sidebar
  },
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
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
