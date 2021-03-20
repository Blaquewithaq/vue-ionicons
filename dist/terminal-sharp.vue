<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="terminal-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="terminal-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "terminal-sharp-icon",
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

