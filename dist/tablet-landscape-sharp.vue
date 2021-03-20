<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="tablet-landscape-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82zm448 330H64V100h384z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="tablet-landscape-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82zm448 330H64V100h384z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "tablet-landscape-sharp-icon",
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

