<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="bicycle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M388 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76zM124 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 360v-86l-64-42 80-88 40 72h56"/><path d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="bicycle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M388 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76zM124 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 360v-86l-64-42 80-88 40 72h56"/><path d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bicycle-outline-icon",
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

