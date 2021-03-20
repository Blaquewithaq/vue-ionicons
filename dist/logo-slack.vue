<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-slack-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06zM149.84 315.1a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0zM196.9 126.12A47.06 47.06 0 1 1 244 79.06v47.06zM196.9 149.84a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12zM385.88 196.9a47.06 47.06 0 1 1 47.06 47.1h-47.06zM362.16 196.9a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0zM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06zM315.1 362.16a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-slack-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06zM149.84 315.1a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0zM196.9 126.12A47.06 47.06 0 1 1 244 79.06v47.06zM196.9 149.84a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12zM385.88 196.9a47.06 47.06 0 1 1 47.06 47.1h-47.06zM362.16 196.9a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0zM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06zM315.1 362.16a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-slack-icon",
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

