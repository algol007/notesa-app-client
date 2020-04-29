<template>
  <div class="sender w-full mb-2 flex flex-row-reverse">
    <div class="chating py-2 px-3 rounded">
      {{ sender }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sender',
  props: [
    'sender'
  ]
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
