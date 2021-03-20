<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="ellipsis-vertical-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1 1 26 26 26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="ellipsis-vertical-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208zm-234-90a26 26 0 1 1 26 26 26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "ellipsis-vertical-circle-sharp-icon",
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

