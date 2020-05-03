<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout',
  created () {
    localStorage.removeItem('items')
    this.$router.push('auth/login')
    this.clearRoom()
  },
  methods: {
    ...mapActions('chat', ['clearRoom'])
  }
}
</script>
