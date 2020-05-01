<template>
  <div></div>
</template>

<script>
export default {
  name: 'Logout',
  created () {
    localStorage.removeItem('items')
    this.$router.push('auth/login')
  }
}
</script>
