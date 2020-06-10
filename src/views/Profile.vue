<template>
  <div class="profile-view">
    <profile @maps="seeMaps" />
    <div class="maps">
      <GmapMap class="mx-auto rounded"
        :center="{lat:-6.392132, lng:106.829743}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 500px; height: 350px"
        @click="center=m.position"
        >
        <!-- <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        /> -->
      </GmapMap>
      <!-- <GmapMarker ref="myMarker"
      :position="google && new google.maps.LatLng(1.38, 103.8)" /> -->
    </div>
    <p class="text-center text-gray-500 text-xs">
      &copy;2020 ALGOL007. All rights reserved.
    </p>
    <div class="see-profile mt-3" @click="seeMaps">
      <i class="fas fa-arrow-left"></i>
      <p>Back to profile</p>
    </div>
  </div>
</template>

<script>
import profile from '@/components/Profile.vue'
// import { gmapApi } from 'vue2-google-maps'

export default {
  name: 'Profile',
  components: {
    profile
  },
  methods: {
    seeMaps () {
      const profile = document.querySelector('.profile')
      const back = document.querySelector('.see-profile')
      const maps = document.querySelector('.maps')
      profile.classList.toggle('hide')
      back.classList.toggle('show')
      maps.classList.toggle('show')
      // console.log('hello')
    }
  }
  // computed: {
  //   google: gmapApi
  // }
}
</script>

<style lang="scss" scoped>
  .profile-view{
    background-color: #CAE8D5;
    min-height: 100vh;
    padding: 50px 0;
  }
  .maps{
    display: none;
  }
  .see-profile{
    cursor: pointer;
    text-align: center;
    display: none;
  }
  .see-profile i{
    font-size: 1.5em;
  }
</style>
