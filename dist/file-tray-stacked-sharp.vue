<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="file-tray-stacked-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316zM320 352a64 64 0 0 1-128 0H32v144h448V352z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="file-tray-stacked-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 16H64L32 176v144h448V176zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316zM320 352a64 64 0 0 1-128 0H32v144h448V352z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "file-tray-stacked-sharp-icon",
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

