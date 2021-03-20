<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="toggle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288zm0 230a86 86 0 1 1 86-86 85.88 85.88 0 0 1-86 86z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="toggle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288zm0 230a86 86 0 1 1 86-86 85.88 85.88 0 0 1-86 86z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "toggle-sharp-icon",
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

