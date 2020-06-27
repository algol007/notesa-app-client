<template>
  <div class="chat-lists">
    <div class="chat w-full flex px-2 py-3 hover:bg-gray-200" v-for="user in allUsers" :key="user.id"  @click="$emit('selected', user)">
      <div class="profile-img">
        <img :src="user.image" :alt="user.image" class="h-12 rounded-full">
      </div>
      <div class="profile-info text-gray-900 pl-3">
        <div class="profile-name">
          {{ user.name }}
        </div>
        <div class="profile-msg text-gray-700">
          Message
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Chat',
  mounted () {
    this.getAllUsers()
  },
  methods: {
    ...mapActions('user', ['getAllUsers'])
  },
  computed: {
    ...mapState('user', ['allUsers'])
  }
}
</script>

<style lang="scss" scoped>
  .chat{
    border-bottom: 2px solid #84A9AC;
    overflow: hidden;
    height: 70px;
    cursor: pointer;
  }
  .profile-msg{
    font-size: 14px;
    overflow: hidden;
    height: 20px;
  }
  .profile-name{
    height: 25px;
    overflow: hidden;
  }
</style>
