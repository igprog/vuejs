<template>
  <div class="container text-left">
    <h1>{{d.msg}}</h1>
    globalVariable: {{d.gl}}
    <div>
      <control type="button" @click="testMixin" css="warning" title="Test mixin" />
    </div>
    <div>
      <control type="button" @click="getConfig" css="info" title="Test Http Get" />
    </div>
    <div>
      <control type="button" @click="postData" css="primary" title="Test Http Post" />
      <loading :val="loading" title="Loading Data from web service" />
    </div>
    <div>
      <control type="button" @click="testLoading" css="danger" title="Test Loading" />
    </div>
    <loading :val="d.loading" title="Loading..." />
    <icon name="home" scale="5" title="Test"></icon>
    <json :data="d" />
  </div>
</template>

<script>
import json from "../components/json.vue";
import control from "../components/control.vue";
import loading from "../components/loading.vue";
import { mixin } from "../mixins/mixin.js";
export default {
  mixins: [mixin],
  components: {
    json,
    control,
    loading
  },
  data() {
    return {
      d: {
        msg: "Test",
        gl: this.$globalVariable,
        config: null,
        postdata: null,
        loading: false
      }
    };
  },
  methods: {
    getConfig() {
      debugger;
      this.get("config/config.json").then(d => {
        this.g.config = d;
      });
    },
    postData() {
      //this.d.loading = true;
      this.post("Settings", "Load", null).then(d => {
        this.d.postdata = d.account;
        //this.d.loading = false;
      });
    },
    testLoading() {
      this.d.loading = true;
    }
  }
};
</script>

<style scoped>
h1 {
  color: #c07228;
}
</style>
