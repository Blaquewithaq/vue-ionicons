<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="laptop-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M496 400h-28.34A47.92 47.92 0 0 0 480 367.86V128.14A48.2 48.2 0 0 0 431.86 80H80.14A48.2 48.2 0 0 0 32 128.14v239.72A47.92 47.92 0 0 0 44.34 400H16a16 16 0 0 0 0 32h480a16 16 0 0 0 0-32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="laptop-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M496 400h-28.34A47.92 47.92 0 0 0 480 367.86V128.14A48.2 48.2 0 0 0 431.86 80H80.14A48.2 48.2 0 0 0 32 128.14v239.72A47.92 47.92 0 0 0 44.34 400H16a16 16 0 0 0 0 32h480a16 16 0 0 0 0-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "laptop-icon",
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

