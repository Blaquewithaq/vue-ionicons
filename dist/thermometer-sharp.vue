<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="thermometer-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0 113.39 113.39 0 0 0-48-92.76zM256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="thermometer-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0 113.39 113.39 0 0 0-48-92.76zM256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "thermometer-sharp-icon",
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

