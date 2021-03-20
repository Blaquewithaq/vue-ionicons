<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="map-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M327.71 130.93L184 39 32 144v336l152.29-98.93L328 473l152-105V32zM312 421l-112-72V91l112 72z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="map-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M327.71 130.93L184 39 32 144v336l152.29-98.93L328 473l152-105V32zM312 421l-112-72V91l112 72z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "map-sharp-icon",
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

