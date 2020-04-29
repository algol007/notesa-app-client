<template>
  <div class="chat-box">
    <receiver v-for="user in users" :key="user.id" :receiver="user.name" />
    <sender v-for="user in users" :key="user.id" :sender="user.email" />
  </div>
</template>

<script>
import receiver from '@/components/Receiver.vue'
import sender from '@/components/Sender.vue'
import db from '../firebaseInit'

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
      db.collection('user').get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id)
          const data = {
            id: doc.id,
            user_id: doc.data().user_id,
            name: doc.data().name,
            email: doc.data().email,
            password: doc.data().password,
            image: doc.data().image
          }
          this.users.push(data)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
