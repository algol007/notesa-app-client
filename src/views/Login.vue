<template>
  <div class="login-view">
    <div class="title">
      <div class="icon">
        <i class="fas fa-comments"></i>
      </div>
      <h1>Notesa App</h1>
    </div>
    <login />
  </div>
</template>

<script>
import login from '../components/Login.vue'

export default {
  name: 'Login',
  components: {
    login
  }
}
</script>

<style lang="scss" scoped>
  .login-view{
    background-color: #CAE8D5;
    min-height: 100vh;
    padding-top: 30px;
  }
  .title{
    text-align: center;
    margin-bottom: 20px;
    color: #204051;
  }
  .title h1{
    font-size: 2em;
  }
  .title .icon{
    font-size: 5em;
  }
</style>
