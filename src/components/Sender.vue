<template>
  <div class="sender w-full mb-2 flex flex-row-reverse">
    <div class="chating py-2 px-3 rounded">
      {{ message }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Sender',
  props: [
    'message'
  ],
  data () {
    return {
      sender: null
    }
  },
  methods: {
    send () {
      axios
        .get(process.env.VUE_APP_BASE_URL + `chat/user/${this.user.id}`)
        .then(res => {
          console.log(res.data.chat.rows)
          this.sender = res.data.chat.rows
        })
    }
  },
  mounted () {
    // this.send()
  },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
  .sender{
    width: 100%;
  }
  .chating{
    background-color: #84A9AC;
  }
</style>
