<template>
  <div id="favorite" v-if="favData.length >0">
    <Page :items="favData"></Page>
  </div>
  <div v-else>
    <h1>還沒有收藏影片嗎?</h1>
    <router-link to="/">從這裡去看看！</router-link>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
export default {
  name: 'Favourite',
  components: {
    Page
  },
  computed: {
    favData () {
      return this.$store.getters.favData
    }
  }
}
</script>
