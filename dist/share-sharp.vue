<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="share-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12zM272 92.63l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="share-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12zM272 92.63l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "share-sharp-icon",
  mixins: [
    IoniconsMixin
  ],
  data () {
    let iconTitle = this.title ? this.title : null
    return {
      iconTitle: iconTitle
    }
  }
}
</script>

