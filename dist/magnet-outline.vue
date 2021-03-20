<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="magnet-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M421.83 293.82A144 144 0 0 0 218.18 90.17M353.94 225.94a48 48 0 0 0-67.88-67.88" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"/><path d="M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="magnet-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M421.83 293.82A144 144 0 0 0 218.18 90.17M353.94 225.94a48 48 0 0 0-67.88-67.88" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48"/><path d="M286.06 158.06L172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17M421.83 293.82L308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "magnet-outline-icon",
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

