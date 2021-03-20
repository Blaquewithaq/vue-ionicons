<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="refresh-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="M256 149l40 40-40 40"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="refresh-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="28"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="28" d="M256 149l40 40-40 40"/><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "refresh-circle-outline-icon",
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

