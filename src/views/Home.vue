<template>
  <div id="home">
    <Page :items="items"></Page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue'
export default {
  name: 'Home',
  components: {
    Page
  },
  props: {
    items: Array
  }
}
</script>
