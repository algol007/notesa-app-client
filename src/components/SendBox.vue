<template>
  <div class="send-box px-5">
    <input class="appearance-none rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none rounded-full" id="username" type="text" placeholder="Type a message" v-model="this.message">
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'SendBox',
  data () {
    return {
      message: null
    }
  },
  methods: {
    sendChat () {
      axios
        .post(process.env.VUE_APP_BASE_URL + 'chat', {
          userId: this.user.id,
          message: this.message
        })
    }
  },
  // mounted () {
  //   console.log(this.user)
  // },
  computed: {
    ...mapState('user', ['user'])
  }
}
</script>

<style lang="scss" scoped>
  .send-box{
    height: 60px;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    padding-right: 290px;
  }
  input{
    border: 2px solid #3B6978;
  }
  @media screen and (max-width: 768px) {
    .send-box{
      display: none;
    }
  }
</style>
