<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="bowling-ball-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM286 230a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm8-76a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm68 44a28 28 0 1 1 28-28 28 28 0 0 1-28 28z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="bowling-ball-sharp-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM286 230a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm8-76a28 28 0 1 1 28-28 28 28 0 0 1-28 28zm68 44a28 28 0 1 1 28-28 28 28 0 0 1-28 28z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bowling-ball-sharp-icon",
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

