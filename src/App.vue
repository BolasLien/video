<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" >Home</router-link> |
      <router-link to="/favourite">My favourite</router-link>
    </div>
    <router-view v-if="loading" :items="items"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageTokens: [],
      loadTimes: 2,
      index: 0,
      loading: false,
      items: []
    }
  },
  methods: {
    loadVideos () {
      // 達執行次數就停止
      if (this.index === this.loadTimes) {
        this.loading = true
        return
      }

      // 要影片列表
      this.axios.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          part: 'snippet,contentDetails',
          chart: 'mostPopular',
          maxResults: 50,
          key: process.env.VUE_APP_KEY,
          // 用token要下一頁的資料
          pageToken: this.pageTokens[this.index]
        }
      })
        .then(response => {
          this.index++

          // 把要來的東西放入items
          response.data.items.forEach(element =>
            this.items.push(element)
          )

          // 把下一頁的token存起來
          this.pageTokens[this.index] = response.data.nextPageToken

          // 再做一次是為了拿下一頁
          this.loadVideos()
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  mounted () {
    this.loadVideos()
  }
}
</script>
