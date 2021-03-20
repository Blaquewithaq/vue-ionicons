<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="browsers-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 48H96a64 64 0 0 0-64 64v288a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64zm24 96H72a8 8 0 0 1-8-8v-24a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v24a8 8 0 0 1-8 8z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="browsers-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M416 48H96a64 64 0 0 0-64 64v288a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64zm24 96H72a8 8 0 0 1-8-8v-24a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v24a8 8 0 0 1-8 8z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "browsers-icon",
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

