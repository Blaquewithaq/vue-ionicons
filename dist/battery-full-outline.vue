<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="battery-full-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="battery-full-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" data-fill="none" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" stroke="#000" stroke-linecap="square" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M480 218.67v74.66"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "battery-full-outline-icon",
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

