<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pie-chart-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37z"/><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pie-chart-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M58 362.09l-6.51-14.59A224 224 0 0 1 256 32h16v234.37z"/><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pie-chart-sharp-icon",
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

