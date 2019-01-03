<template>
  <div class="about">
    <h1><span>How</span> it works</h1>
    <b-container class="page-content">
      <p>This app was created so people can get involved in their local community and can share local events.</p>
      <b-button-group><router-link to="/register"><b-button class="register-btn">Register &rarr;</b-button></router-link>
      <router-link to="/log-in"><b-button class="login-btn">Log In &rarr;</b-button></router-link></b-button-group>
    </b-container>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
  .page-content {
    width:100%;
    max-width:500px;
    margin:30px auto 0;
    background:#fff;
    padding:30px;
    border-radius:3px;
  }
  .page-content p {
    font-size:20px;
    max-width: 500px;
    margin: 0 auto 30px;
    color:#000;
  }
  .register-btn {
    background:#F9C116;
    border-color:#F9C116;
    margin-right:10px;
    width:120px;
  }
  .login-btn {
    background:#3279FD;
    border-color:#3279FD;
    width:120px;
  }
</style>
