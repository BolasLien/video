<template>
  <div class="page">
    <VideoCard
      class="v-card"
      v-for="(data,index) in pageData"
      :key="index"
      :data="data"
      :fav="fav(data)"
    ></VideoCard>
    <div class="page-controller">
      <!-- 首頁 -->
      <input type="button" value="首頁" @click="firstPage" />
      <!-- 上一頁 -->
      <input v-if="pageIndex > 1" type="button" value="上一頁" @click="prevPage" />
      <input v-else type="button" value="上一頁" disabled />
      <p>第 {{ pageIndex }} 頁</p>
      <!-- 下一頁 -->
      <input v-if="pageIndex*numberPerPage < items.length" type="button" value="下一頁" @click="nextPage">
      <input v-else type="button" value="下一頁" disabled>
      <!-- 末頁 -->
      <input type="button" value="末頁" @click="lastPage" />
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue'

export default {
  components: {
    VideoCard
  },
  props: {
    items: Array
  },
  data () {
    return {
      // 頁碼
      pageIndex: 1,
      // 一頁幾個
      numberPerPage: 12
    }
  },
  methods: {
    fav (data) {
      return !(this.favData.find((e) => e.id === data.id) === undefined)
    },
    firstPage () {
      this.pageIndex = 1
      // this.callPage()
    },
    nextPage () {
      this.pageIndex += 1
      // this.callPage()
    },
    prevPage () {
      this.pageIndex -= 1
      // this.callPage()
    },
    lastPage () {
      this.pageIndex = 1 + Math.floor(this.items.length / this.numberPerPage)
      // this.callPage()
    }
  },
  computed: {
    favData () {
      return this.$store.getters.favData
    },
    pageData () {
      const datas = []
      for (
        let i = 0 + this.numberPerPage * (this.pageIndex - 1);
        i < this.numberPerPage + this.numberPerPage * (this.pageIndex - 1);
        i++
      ) {
        if (i >= this.items.length) {
          break
        }
        datas.push(this.items[i])
      }

      return datas
    }
  },
  mounted () {
    this.firstPage()
  }
}
</script>
