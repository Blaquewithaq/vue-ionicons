<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="bowling-ball-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM288 224a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm8-72a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm64 40a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="bowling-ball-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61zM288 224a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm8-72a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm64 40a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bowling-ball-icon",
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

