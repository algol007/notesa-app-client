<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  beforeCreate () {
    localStorage.removeItem('items')
    this.$router.push('auth/login')
  }
}
</script>
