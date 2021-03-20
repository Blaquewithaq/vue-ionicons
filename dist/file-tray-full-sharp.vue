<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="file-tray-full-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M128 128h256v38H128zM112 192h288v38H112z"/><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="file-tray-full-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M128 128h256v38H128zM112 192h288v38H112z"/><path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "file-tray-full-sharp-icon",
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

