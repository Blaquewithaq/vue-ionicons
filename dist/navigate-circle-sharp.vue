<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="navigate-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="navigate-circle-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208zm-8 361V264H103l259-114.11z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "navigate-circle-sharp-icon",
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

