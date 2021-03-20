<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="clipboard-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M420 48h-68V28a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12v20H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12zm-84.13 64H176.13V80h159.74z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="clipboard-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M420 48h-68V28a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12v20H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12zm-84.13 64H176.13V80h159.74z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "clipboard-sharp-icon",
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

