<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="bed-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48zm-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="bed-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48zm-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "bed-sharp-icon",
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

