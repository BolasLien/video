 <template>
  <div id="watch-video">
    <div id="watch">
      <video id="video" class="video-js vjs-big-play-centered">
        <source
          src="https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8"
          type="application/x-mpegURL"
        />
      </video>

      <div id="text">
        <span id="title">{{ title }}</span>
        <span id="description">{{ description }}</span>
      </div>
    </div>
    <div id="recommand">
      <h1>推薦影片</h1>
      <VideoCard v-for="(data,index) in recommadData" :key="index" :data="data" :fav="fav(data)"></VideoCard>
    </div>
  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard.vue'
/* eslint-disable */
export default {
  components: {
    VideoCard,
  },
  props: {
    items: Array,
  },
  data() {
    return {};
  },
  methods: {
    fav(data) {
      return !(this.favData.find((e) => e.id === data.id) === undefined);
    },
    initVideo() {
      this.$video(video, {
        controls: true,
        preload: "auto",
      });
    },
  },
  computed: {
    recommadData(){
      const data = []
      for (let i = 0; i < 4; i++) {
        const r = Math.floor(Math.random() * this.items.length)
        if (data.indexOf(this.items[r]) !== -1) {
          i--
        } else {
          data.push(this.items[r])
        }
      }

      return data
    },
    favData() {
      return this.$store.getters.favData;
    },
    title() {
      return this.items.find((e) => e.id === this.$route.params.id).snippet
        .title;
    },
    description() {
      return this.items.find((e) => e.id === this.$route.params.id).snippet
        .description;
    },
  },
  mounted() {
    this.initVideo();
  }
}
</script>
