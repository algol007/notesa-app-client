<template>
  <div class="chat w-full flex px-2 py-3 hover:bg-gray-200" @click="$emit('click')">
    <div class="profile-img">
      <img src="https://i0.wp.com/www.repol.copl.ulaval.ca/wp-content/uploads/2019/01/default-user-icon.jpg" alt="profile-img" class="h-12 rounded-full">
    </div>
    <div class="profile-info text-gray-900 pl-3">
      <div class="profile-name">
        {{ name }}
      </div>
      <div class="profile-msg text-gray-600">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: [
    'name',
    'message'
  ]
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
