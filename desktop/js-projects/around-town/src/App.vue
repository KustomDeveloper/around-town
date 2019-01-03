<template>
  <div id="app">
      <NavBar />
      <transition name="slideinout" mode="out-in"><router-view :key="$route.fullPath" /></transition>
  </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NavBar from '@/components/NavBar.vue';
export default {
  components: {
      NavBar
  }
}
</script>
<style>
html {
  height: 100%;
}
body {
  background: linear-gradient(to right top, #673680, #4471AB, #008bc3, #00abb0, #48c48d);
  background-size:cover;
}
p {
  color:#fff;
}
h1 {
  color:#fff;
  position:relative;
  display:inline-block;
  margin-top:30px;
}
h1 span {
  color:#F3A61C;
  position:relative;
}
h3 {
  color:#fff;
}
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
