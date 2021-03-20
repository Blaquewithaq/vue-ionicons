<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="reload-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M341.54 197.85l-11.37-13.23a103.37 103.37 0 1 0 22.71 105.84" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M367.32 162a8.44 8.44 0 0 0-6 2.54l-59.54 59.54a8.61 8.61 0 0 0 6.09 14.71h59.54a8.62 8.62 0 0 0 8.62-8.62v-59.56a8.61 8.61 0 0 0-8.68-8.63z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="reload-circle-outline-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" data-fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32"/><path d="M341.54 197.85l-11.37-13.23a103.37 103.37 0 1 0 22.71 105.84" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"/><path d="M367.32 162a8.44 8.44 0 0 0-6 2.54l-59.54 59.54a8.61 8.61 0 0 0 6.09 14.71h59.54a8.62 8.62 0 0 0 8.62-8.62v-59.56a8.61 8.61 0 0 0-8.68-8.63z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "reload-circle-outline-icon",
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

