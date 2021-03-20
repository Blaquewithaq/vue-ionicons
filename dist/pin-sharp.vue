<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="pin-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M339 99a83 83 0 1 0-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 0 0 339 99zm-59-6a21 21 0 1 1 21-21 21 21 0 0 1-21 21z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="pin-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M339 99a83 83 0 1 0-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 0 0 339 99zm-59-6a21 21 0 1 1 21-21 21 21 0 0 1-21 21z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "pin-sharp-icon",
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

