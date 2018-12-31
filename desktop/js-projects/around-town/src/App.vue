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
h1 {
  color:#C35C14;
  position:relative;
  display:inline-block;
  background:#fff;
}
h1 span {
  color:#F3A61C;
  position:relative;
}
#app {
  font-family: "Source Sans Pro", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding:20px 0;
  float:right;
}
.logo {
  padding:15px 0;
}
nav a {
  font-weight: bold;
  color: #F3A61C;
}
nav a:hover {
  color: #CC773D;
  text-decoration:none;
}
nav a.router-link-exact-active {
  color: #CC773D;
}
</style>
