<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="archive-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="48" width="448" height="80" rx="12" ry="12"/><path d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="archive-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="48" width="448" height="80" rx="12" ry="12"/><path d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "archive-sharp-icon",
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

