<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="reader-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="reader-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12zm192 260H160v-32h112zm80-80H160v-32h192zm0-80H160v-32h192z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "reader-sharp-icon",
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

