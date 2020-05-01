<template>
  <div class="register-view">
    <div class="title">
      <div class="icon">
        <i class="fas fa-comments"></i>
      </div>
      <h1>Notesa App</h1>
    </div>
    <register />
  </div>
</template>

<script>
import register from '../components/Register.vue'

export default {
  name: 'Register',
  components: {
    register
  },
  beforeCreate () {
    const isLogin = localStorage.getItem('items')
    if (isLogin) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
  .register-view{
    background-color: #CAE8D5;
    min-height: 100vh;
    padding: 30px 0 50px;
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
