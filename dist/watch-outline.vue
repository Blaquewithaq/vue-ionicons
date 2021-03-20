<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="watch-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="112" y="112" width="288" height="288" rx="64" ry="64" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="watch-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="112" y="112" width="288" height="288" rx="64" ry="64" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "watch-outline-icon",
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

