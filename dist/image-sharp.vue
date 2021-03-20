<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="image-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24zm-124.38 64.2a48 48 0 1 1-43.42 43.42 48 48 0 0 1 43.42-43.42zM76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="image-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24zm-124.38 64.2a48 48 0 1 1-43.42 43.42 48 48 0 0 1 43.42-43.42zM76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "image-sharp-icon",
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

