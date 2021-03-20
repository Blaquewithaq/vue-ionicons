<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="exit-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12zM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="exit-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12zM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "exit-sharp-icon",
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

