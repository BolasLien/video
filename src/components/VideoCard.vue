<template>
  <div class="card">
    <router-link :to="'/watchvideo/' + videoId">
    <div class="pic">
      <img class="thumbnails" :src="thumbnails.medium.url" alt="img" />
      <span class="length">{{ videoLength }}</span>
    </div>
    </router-link>
    <div class="control">
      <input v-if="fav" class="btn-fav" type="button" value="收藏" @click="remove()" />
      <input v-else class="btn" type="button" value="收藏" @click="add()" />
      <div class="text">
        <span class="title">{{ title }}</span>
        <span class="description">{{ description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    fav: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    thumbnails () {
      return this.data.snippet.thumbnails
    },
    videoLength () {
      return this.data.contentDetails.duration
    },
    title () {
      return this.data.snippet.title
    },
    description () {
      return this.data.snippet.description
    },
    videoId () {
      return this.data.id
    }
  },
  methods: {
    add () {
      this.$store.commit('addFavData', this.data)
    },
    remove () {
      this.$store.commit('removeFavData', this.data)
    }
  }
}
</script>
