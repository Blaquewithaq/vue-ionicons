<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="git-commit-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M480 224H380a128 128 0 0 0-247.9 0H32v64h100.05A128 128 0 0 0 380 288h100zm-224 96a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="git-commit-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M480 224H380a128 128 0 0 0-247.9 0H32v64h100.05A128 128 0 0 0 380 288h100zm-224 96a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "git-commit-sharp-icon",
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

