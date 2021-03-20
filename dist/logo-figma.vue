<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="logo-figma-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160 80 80 0 0 0 0 160 80 80 0 1 0 80 80V176z"/><circle cx="336" cy="256" r="80"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="logo-figma-icon">
    <svg :width="w" :height="h" class="ion__svg" viewBox="0 0 512 512"><path d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160 80 80 0 0 0 0 160 80 80 0 1 0 80 80V176z"/><circle cx="336" cy="256" r="80"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "logo-figma-icon",
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

