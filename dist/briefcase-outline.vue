<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="briefcase-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="128" width="448" height="320" rx="48" ry="48" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M480 240H32M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="briefcase-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><rect x="32" y="128" width="448" height="320" rx="48" ry="48" data-fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32"/><path d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M480 240H32M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "briefcase-outline-icon",
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

