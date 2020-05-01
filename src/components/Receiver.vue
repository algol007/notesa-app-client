<template>
  <div class="receiver w-full mb-2 flex">
    <div class="chating bg-white py-2 px-3 rounded">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Receiver',
  props: [
    'message'
  ]
}
</script>

<style lang="scss" scoped>
  .receiver{
    width: 100%;
  }
</style>
