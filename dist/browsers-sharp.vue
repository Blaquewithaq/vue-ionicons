<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="browsers-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 64v384a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16zm408 364H72a4 4 0 0 1-4-4V152a4 4 0 0 1 4-4h368a4 4 0 0 1 4 4v272a4 4 0 0 1-4 4z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="browsers-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M32 64v384a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16zm408 364H72a4 4 0 0 1-4-4V152a4 4 0 0 1 4-4h368a4 4 0 0 1 4 4v272a4 4 0 0 1-4 4z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "browsers-sharp-icon",
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

