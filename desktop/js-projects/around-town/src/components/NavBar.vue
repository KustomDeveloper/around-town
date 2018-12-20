<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-navbar-brand href="/"><img width="60%" src="../assets/logo.svg" alt="logo" /></b-navbar-brand>
            <b-navbar>
                <b-nav class="ml-auto">
                  <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                  <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
                </b-nav>
            </b-navbar>
        </b-row>
    </b-container>
</template>

<script>
export default {

};
</script>

<style scoped>
    li.nav-item {
        list-style: none;
    }
    .navbar {
        margin-left: auto;
    }    
</style>
