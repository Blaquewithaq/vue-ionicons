<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-vercel-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 48l240 416H16z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-vercel-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path fill-rule="evenodd" d="M256 48l240 416H16z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-vercel-icon",
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

