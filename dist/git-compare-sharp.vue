<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="git-compare-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416 209 328.79zM113 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32zM432 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96 305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM400 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="git-compare-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416 209 328.79zM113 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32zM432 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96 305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM400 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-compare-sharp-icon",
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

