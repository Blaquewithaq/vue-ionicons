<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="filter-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zM392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zM296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="filter-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48zM392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48zM296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "filter-icon",
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

