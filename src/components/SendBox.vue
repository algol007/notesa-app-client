<template>
  <div class="send-box px-5">
    <input class="appearance-none rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none rounded-full" id="username" type="text" placeholder="Type a message">
  </div>
</template>

<script>
export default {
  name: 'SendBox'
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
