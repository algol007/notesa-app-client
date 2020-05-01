<template>
  <div class="chat-lists">
    <div class="chat w-full flex px-2 py-3 hover:bg-gray-200" v-for="(user, index) in users" :key="index"  @click="$emit('selected', user)">
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
import axios from 'axios'

export default {
  name: 'Chat',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      axios
        .get(process.env.VUE_APP_BASE_URL + 'user')
        .then(res => {
          // console.log(res.data.users.rows)
          const data = res.data.users.rows
          for (let i = 0; i < data.length; i++) {
            // console.log(data[i].id)
            // console.log(this.user.id)
            const user = JSON.parse(localStorage.getItem('items'))
            if (data[i].id !== user.id) {
              this.users.push(data[i])
            }
          }
        })
    }
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
