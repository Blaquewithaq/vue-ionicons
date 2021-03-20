<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="scan-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M296 352h28a28 28 0 0 0 28-28v-28M352 216v-28a28 28 0 0 0-28-28h-28M216 352h-28a28 28 0 0 1-28-28v-28M160 216v-28a28 28 0 0 1 28-28h28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="scan-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M296 352h28a28 28 0 0 0 28-28v-28M352 216v-28a28 28 0 0 0-28-28h-28M216 352h-28a28 28 0 0 1-28-28v-28M160 216v-28a28 28 0 0 1 28-28h28" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "scan-circle-outline-icon",
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

