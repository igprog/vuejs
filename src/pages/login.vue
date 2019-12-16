<template>
  <div>
    <h1>{{d.page}}</h1>
    <control v-model="d.userName" title="User Name" />
    <control v-model="d.password" title="Password" type="password"/>
    <control @click="login(d)" title="Login" type="button" css="primary" ico="sign-in-alt"/>
    <json :data="d"/>
  </div>
</template>

<script>
import json from "../components/json.vue";
import control from "../components/control.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  components: {
    json,
    control
  },
  data() {
    return {
      d: {
        page: "Login",
        id: null,
        userName: null,
        password: null
      }
    };
  },
  created() {
    debugger;
    this.d.accessdate = new Date();
  },
  methods: {
    login(d) {
      alert("Login: " + d.userName);
    }
  }
};
</script>