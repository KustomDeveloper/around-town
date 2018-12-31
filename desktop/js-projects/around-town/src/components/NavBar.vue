<template>
    <b-container id="navigation">
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
    </b-container>
</template>

<script>
export default {

};
</script>

<style>
    #navigation {
        margin-bottom:50px
    }
    li.nav-item {
        list-style: none;
    }
    .navbar {
        margin-left: auto;
    }
    .slideinout-enter-active, .slideinout-leave-active {
        transition: opacity 0.3s, transform 0.3s;
    }
    .slideinout-enter, .slideinout-leave-to {
        opacity: 0;
        transform: translateX(-30%);
    }
</style>
