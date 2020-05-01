<template>
  <div class="search-box">
    <form class="rounded flex search-item">
      <div class="icon py-3 pl-4 bg-white text-gray-700"><i class="fas fa-search"></i></div>
      <input class="w-full py-3 px-3 text-gray-700 focus:outline-none" id="search" type="text" placeholder="Search or start new chat">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchBox'
}
</script>

<style scoped lang="scss">
</style>
