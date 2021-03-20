<template>
  <div
    v-if="iconTitle"
    class="ion"
    :class="ionClass"
    :title="iconTitle"
    name="laptop-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32z"/></svg>
  </div>
  <div
    v-else
    class="ion"
    :class="ionClass"
    name="laptop-sharp-icon">
    <svg viewBox="0 0 512 512"  :width="w" :height="h" class="ion__svg" ><path d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32z"/></svg>
  </div>
</template>

<script>
import IoniconsMixin from './ionicons-mixin'

export default {
  name: "laptop-sharp-icon",
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

