<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="recording-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236zM54 256a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74zm330 74a74 74 0 1 1 74-74 74.09 74.09 0 0 1-74 74z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="recording-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236zM54 256a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74zm330 74a74 74 0 1 1 74-74 74.09 74.09 0 0 1-74 74z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "recording-sharp-icon",
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

