<template>
  <div class="chat-box">
    <receiver v-for="user in users" :key="user.id" :receiver="user.name" />
    <sender v-for="user in users" :key="user.id" :sender="user.email" />
  </div>
</template>

<script>
import receiver from '@/components/Receiver.vue'
import sender from '@/components/Sender.vue'

export default {
  name: 'ChatBox',
  components: {
    receiver,
    sender
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.dataUser()
  },
  methods: {
    dataUser () {
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
