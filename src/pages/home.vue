<template>
  <div class="text-center">
    <h1>
      <icon name="home" scale="3"></icon>
      {{ appname }}
    </h1>
    <hr/>
    <div class="text-justify">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script>
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  components: {},
  data() {
    return {
      d: null
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
