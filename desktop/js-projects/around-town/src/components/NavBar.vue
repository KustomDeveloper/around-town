<template>
    <b-container-fluid id="navigation">
        <b-row>
            <b-navbar-brand href="/"><img width="60%" src="../assets/around-town-logo.svg" alt="logo" /></b-navbar-brand>
            <b-navbar>
                <b-nav class="ml-auto">
                  <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                  <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
                  <b-nav-item><router-link to="/event/create">Create an Event</router-link></b-nav-item>
                  <b-nav-item><router-link to="/register">Register</router-link></b-nav-item>
                  <b-nav-item><router-link to="/log-in">Log In</router-link></b-nav-item>
                </b-nav>
            </b-navbar>
        </b-row>
    </b-container-fluid>
</template>

<script>
export default {

};
</script>

<style>
.logo {
  padding:15px 0;
}
#navigation {
    background:#fff;
    margin-bottom:50px;
    width:100%;
}
#navigation .row {
    position:relative;
    background:#fff;
    margin:0 auto;
    width:100%;
    padding:5px 25% 10px;
    border-bottom-left-radius:50% 20%;
    border-bottom-right-radius:50% 20%;
}
li.nav-item {
    list-style: none;
}
.navbar {
    margin-left: auto;
}
nav a {
    font-weight: 400;
    color: #018cc2;
    text-transform: uppercase;
    font-size: 16px;
}
nav {
  padding:20px 0;
  float:right;
}
nav a:hover {
  color: #CC773D;
  text-decoration:none;
}
nav a.router-link-exact-active {
  color: #CC773D;
  font-weight:bold;
  border-bottom:1px solid #ccc;
  padding-top:1px;
}
.slideinout-enter-active, .slideinout-leave-active {
    transition: opacity 0.3s, transform 0.3s;
}
.slideinout-enter, .slideinout-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>
