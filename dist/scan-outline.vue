<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="scan-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 448h56a56 56 0 0 0 56-56v-56M448 176v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56M64 176v-56a56 56 0 0 1 56-56h56" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="scan-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 448h56a56 56 0 0 0 56-56v-56M448 176v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56M64 176v-56a56 56 0 0 1 56-56h56" data-fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "scan-outline-icon",
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

