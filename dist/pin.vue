<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pin-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 96a80 80 0 1 0-96 78.39v283.17a32.09 32.09 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.09 32.09 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96zm-56 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pin-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M336 96a80 80 0 1 0-96 78.39v283.17a32.09 32.09 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.09 32.09 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96zm-56 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pin-icon",
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

