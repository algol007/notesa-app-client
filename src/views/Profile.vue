<template>
  <div class="profile-view">
    <profile />
  </div>
</template>

<script>
import profile from '@/components/Profile.vue'

export default {
  name: 'Profile',
  components: {
    profile
  }
}
</script>

<style lang="scss" scoped>
  .profile-view{
    background-color: #CAE8D5;
    min-height: 100vh;
    padding-top: 50px;
  }
</style>
