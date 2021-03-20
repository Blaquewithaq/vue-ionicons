<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="toggle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="368" cy="256" r="128" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="16" y="128" width="480" height="256" rx="128" ry="128" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="toggle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><circle cx="368" cy="256" r="128" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><rect x="16" y="128" width="480" height="256" rx="128" ry="128" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "toggle-outline-icon",
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

