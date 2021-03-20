<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pricetag-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M304 32L16 320l176 176 288-288V32zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pricetag-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M304 32L16 320l176 176 288-288V32zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pricetag-sharp-icon",
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

