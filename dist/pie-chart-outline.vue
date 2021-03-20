<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pie-chart-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0 0 18.09 85L256 256z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pie-chart-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65" data-fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0 0 18.09 85L256 256z" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pie-chart-outline-icon",
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

