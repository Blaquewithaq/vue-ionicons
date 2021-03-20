<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="git-pull-request-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M192 96a64 64 0 1 0-97 54.81v209.8a64 64 0 1 0 64 0V152a64.06 64.06 0 0 0 33-56zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm-1 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="git-pull-request-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M192 96a64 64 0 1 0-97 54.81v209.8a64 64 0 1 0 64 0V152a64.06 64.06 0 0 0 33-56zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm-1 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM416 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0zM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-pull-request-sharp-icon",
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

